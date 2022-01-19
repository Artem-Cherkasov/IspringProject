import { useRef } from 'react';
import { deleteElement, dispatch, getCardMaker } from '../../../../editor';
import styles from './ElementEditorButton.module.css'
import { useDeleteButton } from './useDeleteButton';

type ElementEditorButtonProps = {
    buttonName: string,
}

function ElementEditorButton(props: ElementEditorButtonProps) {

    const deleteButton = useRef<HTMLButtonElement>(null);

    useDeleteButton(
        deleteButton
    )

    function handlerOnClick() {
        const id = getCardMaker().selectedElements[0]
        console.log(id)
        dispatch(deleteElement, id)
    }

    return(
        <button ref={deleteButton} className={styles.elementeditorbutton}>{props.buttonName}</button>
    )
}

export default ElementEditorButton;