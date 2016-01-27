import alt from "../alt";
import Firebase from 'firebase';

class Actions {
    constructor() {
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messageFailed',
            'channelOpened',
            'messagesLoading',
            'sendMessage',
            'messagesSendSuccess',
            'messagesSendError',
            'messageReceived'
        )
    }

    login(router) {
        return (dispatch) => {
            var firebaseRef = new Firebase('https://react-stack-dicarix.firebaseio.com');
            firebaseRef.authWithOAuthPopup("google", (error, user) => {
                if (error) {
                    return;
                }
                dispatch(user);
                router.transitionTo('/chat');
            });
        }
    }

}

export default alt.createActions(Actions);