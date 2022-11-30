import { initProgram } from './option';
import { postTweetCmd,postTweetWithRrefCmd } from './tweetCmd';
import { updateprofileCmd } from './profileCmd';

const program = initProgram();

postTweetCmd(program);
postTweetWithRrefCmd(program);
updateprofileCmd(program);

program.parse();