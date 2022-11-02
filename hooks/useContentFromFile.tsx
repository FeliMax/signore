import { useEffect, useState } from 'react';

/**
 * Hook for reading the contents of a file.
 * @param path the file path
 * @returns the file content as string
 */
export const useContentFromFile = (path: string) => {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        fetch(path).then(async res => {
            const content = await res.text();
            setContent(content);
        });
    });

    return content;
};
