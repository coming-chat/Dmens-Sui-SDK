import { initProgram } from './option';
import { postTweetCmd,postTweetWithRrefCmd,followSomeoneCmd } from './tweetCmd';
import { updateprofileCmd } from './profileCmd';

const program = initProgram();

postTweetCmd(program);
postTweetWithRrefCmd(program);
updateprofileCmd(program);
followSomeoneCmd(program);

program.parse();