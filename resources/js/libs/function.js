export default {
    verifySessionFinished: (status, code = 200) => {
        console.log(status);
        if (status == 419 || status == 401) {
            console.log("L" + status);
            return true;
        }
        return false;
    },
    getFileExtension: (filename = "") => {
        return (
            filename.substring(
                filename.lastIndexOf(".") + 1,
                filename.length
            ) || filename
        );
    },
};
