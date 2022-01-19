import { useEffect, RefObject } from 'react';
import { dispatch, resetSelected, selectingElement } from '../../editor';

export function useSelectedElements(
    elementId: number,
    element: RefObject<HTMLElement>): void {

    useEffect(() => {

        const currentElement = element.current;

        function handlerOnClick(): void {
            dispatch(resetSelected, {})
            dispatch(selectingElement, elementId)
        }

        function handlerOnKey(): void {
            dispatch(resetSelected, {})
            dispatch(selectingElement, 0)
        }

        document.addEventListener("mouseup", handlerOnKey);
        if (currentElement) currentElement.addEventListener("click", handlerOnClick);

        return () => {
            document.removeEventListener("mouseup", handlerOnKey);
            if (currentElement) currentElement.removeEventListener("click", handlerOnClick);
        }

    }, [elementId, element, dispatch, selectingElement]);

}