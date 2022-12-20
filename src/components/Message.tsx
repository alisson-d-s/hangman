type MessageProps = {
    failed: boolean;
    sucess: boolean;
};

const GetMessage = (failed: boolean, sucess: boolean): string => {
    if (failed) return "FAILED";
    if (sucess) return "SUCESS";
    return "";
}

export const Message = ({ failed, sucess }: MessageProps) => {
    let message = GetMessage(failed, sucess);

    return (
        <h1>{message}</h1>
    );
};
