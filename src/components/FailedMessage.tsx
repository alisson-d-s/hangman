type FailedMessageProps = {
    failed: boolean;
};

export const FailedMessage = ({failed}: FailedMessageProps) => {
    return failed
        ? <h5>FAILED</h5>
        : <h5></h5>;
};
