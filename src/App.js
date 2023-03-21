import './App.css';
import './Copyright.css'
import './Button.css'
import {forwardRef, useRef, useState} from "react";
import {getColor} from "./getColor";
import {ContainerAnimation, HandlerAnimation} from "./animation";


function LeftBar({color, hasCentralUnit}) {
    let width = "50%";
    if (hasCentralUnit)
        width = "45%";
    return (
        <div
            style={{
                backgroundColor: color,
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: width,
                zIndex: "1",
            }}
        ></div>
    );
}

function CentralUnit({color, hasCentralUnit}) {
    let display = "none";
    if (hasCentralUnit)
        display = "inline";
    return (
        <div
            style={{
                display: display,
                backgroundColor: color,
                position: "absolute",
                left: "45%",
                top: "0px",
                height: "100%",
                width: "10%",
                zIndex: "1"
            }}
        ></div>
    );
}

function RightBar({color, hasCentralUnit}) {
    let left = "50%";
    let width = "50%";
    if (hasCentralUnit) {
        left = "55%";
        width = "45%";
    }
    return (
        <div
            style={{
                backgroundColor: color,
                position: "absolute",
                left: left,
                top: "0px",
                height: "100%",
                width: width,
                zIndex: "1"
            }}
        ></div>
    );
}

function ButtonsContainer({handleStart, handleStop, altMode, setAcrylicEffectLayer}) {
    const containerRef = useRef(null);
    const handlerRef = useRef(null);
    const containerState = useRef("down");
    const ledState = useRef(true);
    const ledRef = useRef(null);
    const Chinese = useRef(null);
    const English = useRef(null);
    const buttonContents = [["切换模式", "毛玻璃", "开始", "停止"], ["Alt Mode", "Acrylic", "Start", "Stop"]];
    const [buttonContent, setButtonContent] = useState(buttonContents[0]);

    function upAndDown() {
        const cAnimation = new ContainerAnimation(containerRef.current);
        const hAnimation = new HandlerAnimation(handlerRef.current);
        if (containerState.current === "down") {
            cAnimation.start(400, "up", containerRef.current.offsetTop / window.innerHeight * 100, -30);
            hAnimation.startSpin(400, "up");
            containerState.current = "up";
        } else if (containerState.current === "up") {
            cAnimation.start(400, "down", -30, -5);
            hAnimation.startSpin(400, "down");
            containerState.current = "down";
        }
    }

    function handleStartPlus() {
        handleStart();
        containerRef.current.style.background = "rgba(0, 0, 0, 0)";
    }

    function handleStopPlus() {
        handleStop();
        containerRef.current.style.background = "linear-gradient(115deg, rgba(150, 0, 0, 1) 5%, rgba(0, 0, 150, 1) 97%)";
    }

    function setAcrylicEffectLayerPlus() {
        setAcrylicEffectLayer();
        ledState.current = !ledState.current;
        ledRef.current.style.display = ledState.current ? "block" : "none";
    }

    function languageSelect(e) {
        if (e.target.innerHTML === '中') {
            e.target.className = "LanguageOption glow";
            English.current.className = "LanguageOption";
            setButtonContent(buttonContents[0]);
        } else {
            e.target.className = "LanguageOption glow";
            Chinese.current.className = "LanguageOption";
            setButtonContent(buttonContents[1]);
        }
    }

    return (
        <>
            <div className="ButtonsContainer" ref={containerRef}>
                <Button content={buttonContent[0]} handleFunction={altMode}></Button>
                <Button content={buttonContent[1]} handleFunction={setAcrylicEffectLayerPlus} hasLED={ledState.current}
                        ref={ledRef}></Button>
                <Button content={buttonContent[2]} handleFunction={handleStartPlus}></Button>
                <Button content={buttonContent[3]} handleFunction={handleStopPlus}></Button>
                <ContainerHandler onClick={upAndDown} ref={handlerRef}></ContainerHandler>
            </div>
            <div className="LanguageSelector">
                <div className="LanguageOption glow" onClick={languageSelect} ref={Chinese}>中</div>
                <div className="LanguageOption" onClick={languageSelect} ref={English}>EN</div>
            </div>
        </>
    );
}

const Button = forwardRef(function Button({content, handleFunction, hasLED}, LEDRef) {
    if (hasLED) {
        return (
            <div className="Button" onClick={handleFunction}>
                {content}
                <div className="LED" ref={LEDRef}></div>
            </div>
        );
    } else {
        return (
            <div className="Button" onClick={handleFunction}>{content}</div>
        );
    }
})

const ContainerHandler = forwardRef(function ContainerHandler({onClick}, ref) {
    return (
        <div className="ContainerHandler" ref={ref} onClick={onClick}>
            <img src={"./angle-small-down-white.png"} alt="Click to show the menu." className={"Indicator"}/>
        </div>
    );
});

function Copyright({frontContent, backContent}) {
    return (
        <div className="Copyright">
            <div className="Copyright-inner">
                <div className="Copyright-front">
                    {frontContent}
                </div>
                <div className="Copyright-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
}

function App() {
    const [now, setNow] = useState(null);
    const intervalHandler = useRef(null);
    const leftColor = useRef("#000050");
    const rightColor = useRef("#500000");
    const centralColor = useRef("#505050");
    const acrylicEffectLayer = useRef(null);
    const acrylicFlag = useRef(true);
    const [hasCentralUnit, setHasCentralUnit] = useState(false);
    const mode = useRef(0);
    const modes = ["tripleFlashPolice", "doubleFlashPolice", "doubleFlashAmbulance","tripleFlashRepair"];

    function handleStart() {
        clearInterval(intervalHandler.current);
        intervalHandler.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalHandler.current);
        setNow(-1);
    }

    function altMode() {
        mode.current = (mode.current + 1) % (modes.length * 2);
        if (mode.current % 2 === 1) {
            setHasCentralUnit(true);
        } else {
            setHasCentralUnit(false);
        }
    }

    function setAcrylicEffectLayer() {
        let pixel;
        if (acrylicFlag.current) {
            acrylicFlag.current = false;
            pixel = 0;
        } else {
            acrylicFlag.current = true;
            pixel = 200;
        }
        acrylicEffectLayer.current.style.backdropFilter = "blur(" + pixel.toString() + "px)";
    }


    if (now !== null) {
        [leftColor.current, rightColor.current, centralColor.current] = getColor(modes[Math.floor(mode.current / 2)], now);
    }

    return (
        <div className="App">
            <div className="Acrylic-filter" ref={acrylicEffectLayer}/>
            <ButtonsContainer
                handleStart={handleStart}
                handleStop={handleStop}
                altMode={altMode}
                setAcrylicEffectLayer={setAcrylicEffectLayer}
            ></ButtonsContainer>
            <LeftBar color={leftColor.current} hasCentralUnit={hasCentralUnit}></LeftBar>
            <CentralUnit color={centralColor.current} hasCentralUnit={hasCentralUnit}></CentralUnit>
            <RightBar color={rightColor.current} hasCentralUnit={hasCentralUnit}></RightBar>
            <Copyright frontContent={"@HangLark"} backContent={"Emergency Lights Simulator"}></Copyright>
        </div>
    );
}

export default App;
// <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//         Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//         Learn React
//     </a>
// </header>