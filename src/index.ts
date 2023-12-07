import { mount as rendrjsmount, Elem } from '@rendrjs/core';

export const mount = (elem: Elem): HTMLElement => {
    const root = document.createElement('div'); 
    rendrjsmount(root, elem);
    return root;
};
