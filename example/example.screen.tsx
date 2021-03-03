import React from "react";
import styled from "styled-components";
import Text from "../../components/style/text.component";
import colors from "../../themes/colors.theme";
import Camera from "../../components/camera.component";

const Container = styled.div`
    background-color: ${colors.dark};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Content = styled.div` 
    display: flex;
    flex-direction: row;
`

const Screenshots = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 500px;
    width: 350px;
    overflow-y: auto;
`

const ExampleScreen = () => {
    const [screenshots, setScreenshots] = React.useState([]);

    const addScreenshot = (screenshot) => {
        const screenshotsCopy = [...screenshots];
        screenshotsCopy.push(screenshot)
        setScreenshots(screenshotsCopy);
    }

    return <Container>
        <Text h1 style={{ marginBottom: 20 }}>
            Example webcam
        </Text>
        <Content>
            <Camera
                onScreenshot={(screenshot) => addScreenshot(screenshot)}
            />
            <Screenshots style={{ marginLeft: 15 }}>
                {
                    screenshots.length > 0 && screenshots.map(screenshot => {
                        return <img
                            src={screenshot}
                            width="200"
                            height="200"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                    })
                }
            </Screenshots>
        </Content>
    </Container>
}

export default ExampleScreen;