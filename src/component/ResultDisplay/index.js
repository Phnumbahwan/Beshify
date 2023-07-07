import LoadingAnimation from "../../svg/loadingAnimation";
import Output from "../Output";

const ResultDisplay = ({ convertedText, loading }) => {
    return loading ? (
        <LoadingAnimation />
    ) : (
        <Output convertedText={convertedText} />
    )
}

export default ResultDisplay;