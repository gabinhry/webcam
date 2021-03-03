import React from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import colors from "../themes/colors.theme";

const Container = styled.div`
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

const Content = styled.div`
    background-color: ${colors.light};
    position: relative;
    border-radius: 20px;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IconButton = styled.div`
    cursor: pointer;
    position: absolute;
    width: 50px;
    height: 50px; 
    background-color: grey;
    border-radius: 50px;
`

type CameraProps = {
    onScreenshot: (file) => void
}

const Camera = (props: CameraProps) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    React.useEffect(() => {
        if (imgSrc) {
            props?.onScreenshot(imgSrc);
        }
    }, [imgSrc])

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return <Container>
        <Content>
            <Webcam
                height={"100%"}
                width={"100%"}
                ref={webcamRef}
            />
            <IconButton onClick={capture} style={{ bottom: 10 }} />
        </Content>
    </Container >
}

export default Camera;