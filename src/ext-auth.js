const authConfig = {
    Auth: {
            identityPoolId: 'us-west-2:6041209c-4a90-44ec-a24b-981c157804c9',
            region: 'us-west-2',
            userPoolId: 'us-west-2_cVLS7PQ9W',
            userPoolWebClientId: '408v5q2o8ttqh6lt21ufqr1b7t'
    },
    Storage: {
            region: 'us-west-2',
            bucket: 'ext-amplify-react-s3',
            identityPoolId: 'us-west-2:6041209c-4a90-44ec-a24b-981c157804c9'
    }
};

export default authConfig;