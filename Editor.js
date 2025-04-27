import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../socket';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const SAVE_INTERVAL_MS = 2000;

const Editor = () => {
    const { id: documentId } = useParams();
    const [quill, setQuill] = useState();

    useEffect(() => {
        if (quill == null || socket == null) return;

        socket.once('load-document', document => {
            quill.setContents(document);
            quill.enable();
        });

        socket.emit('get-document', documentId);
    }, [quill, documentId]);

    useEffect(() => {
        if (quill == null || socket == null) return;

        const handler = (delta) => {
            quill.updateContents(delta);
        };
        socket.on('receive-changes', handler);

        return () => {
            socket.off('receive-changes', handler);
        };
    }, [quill]);

    useEffect(() => {
        if (quill == null || socket == null) return;

        const handler = (delta, oldDelta, source) => {
            if (source !== 'user') return;
            socket.emit('send-changes', delta);
        };

        quill.on('text-change', handler);

        return () => {
            quill.off('text-change', handler);
        };
    }, [quill]);

    useEffect(() => {
        if (quill == null || socket == null) return;

        const interval = setInterval(() => {
            socket.emit('save-document', quill.getContents());
        }, SAVE_INTERVAL_MS);

        return () => {
            clearInterval(interval);
        };
    }, [quill]);

    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return;

        wrapper.innerHTML = '';
        const editor = document.createElement('div');
        wrapper.append(editor);
        const q = new Quill(editor, { theme: 'snow' });
        q.disable();
        q.setText('Loading...');
        setQuill(q);
    }, []);

    return <div className="container" ref={wrapperRef}></div>;
};

export default Editor;
