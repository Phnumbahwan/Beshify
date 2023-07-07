const Output = ({ convertedText }) => {
    const handleSave = () => {
        navigator.clipboard.writeText(convertedText)
            .then(() => {
                alert('Text copied to clipboard!');
            })
            .catch((error) => {
                console.error('Failed to copy text: ', error);
            });
    }
    return (
        <div>
            <div onClick={handleSave} class='cursor-pointer border border rounded-lg border-transparent mt-5 hover:border-yellow-400 hover:border-dashed hover:bg-yellow-100 tooltip'>
                <p class='text-center m-8'>
                    {convertedText}
                </p>
            </div>
            <div>
                <p class='font-extralight italic text-center pt-7 text-xs'>Please click the text to copy</p>
            </div>
        </div>
    )
}

export default Output;