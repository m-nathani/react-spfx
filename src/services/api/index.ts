import MessageProvider from './MessageProvider';

// Give arg to provider to start endpoint with specific path for example = abc.com/api/person
export const MessageService = new MessageProvider('message');
