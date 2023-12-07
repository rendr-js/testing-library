import { mount as rendrjsmount, Elem } from '@rendrjs/core';
import events from '@testing-library/user-event';
export * as screen from '@testing-library/dom';

export const userEvent = {
    setup: events.setup,
    clear: events.clear,
    click: events.click,
    copy: events.copy,
    cut: events.cut,
    dblClick: events.dblClick,
    deselectOptions: events.deselectOptions,
    hover: events.hover,
    keyboard: events.keyboard,
    pointer: events.pointer,
    paste: events.paste,
    selectOptions: events.selectOptions,
    tripleClick: events.tripleClick,
    type: events.type,
    unhover: events.unhover,
    upload: events.upload,
    tab: events.tab,
};

export const mount = (elem: Elem): HTMLElement => {
    const root = document.createElement('div'); 
    rendrjsmount(root, elem);
    return root;
};
