import { sendMessageToTelegram, EMAIL_SUB_BOT_TOKEN, EMAIL_SUB_CHAT_ID } from '@utils/helpers';

const date = new Date()
sendMessageToTelegram(`New version deployed at ${date}`, EMAIL_SUB_BOT_TOKEN, EMAIL_SUB_CHAT_ID);
