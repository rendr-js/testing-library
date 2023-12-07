import { mount as rendrjsmount, Elem } from '@rendrjs/core';
export { userEvent } from '@testing-library/user-event';
export * as screen from '@testing-library/dom';

export const mount = (elem: Elem): HTMLElement => {
    const root = document.createElement('div'); 
    rendrjsmount(root, elem);
    return root;
};
