import styledComponents from "styled-components";

const ModelBackground = styledComponents.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
`;

const ModelBody = styledComponents.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;

const ControlledModal = ({ shouldShow, onRequestClose, children }) => {

    return (
        <>
            {shouldShow &&
                <ModelBackground onClick={onRequestClose}>
                    <ModelBody onClick={e => e.stopPropagation()}>
                        <button onClick={onRequestClose}>hide model</button>
                        {children}
                    </ModelBody>
                </ModelBackground>
            }
        </>
    )
}

export default ControlledModal;