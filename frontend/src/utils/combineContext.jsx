export default function combineContext(...providers) {
    /**
     * This combines multiple context provider together and returns a single context provider
     */
    return ({ children }) => {
        return providers.reduceRight((accumulator, Currentprovider) => {
            return <Currentprovider>{accumulator}</Currentprovider>;
        }, children /* Initial Value */);
    };
}
// Below is the code of c:\Users\subra\Documents\Messege_Project\frontend\src\components\organisms\Auth\Login.jsx