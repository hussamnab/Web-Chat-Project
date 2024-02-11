import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatPage = (props) => {
    const chatProps = useMultiChatLogic('e1378ecd-bb3e-4a8d-8099-1b40c6515a87', props.user.username, props.user.secret);
    return(
        <div className="chatBody">
            <div style={{height: '100vh'}}>
                <MultiChatSocket {...chatProps} />
                <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
            </div>
        </div>
    )
}

export default ChatPage
