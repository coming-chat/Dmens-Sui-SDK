import { initProgram } from './option';
import { postTweetCmd,postTweetWithRrefCmd } from './tweetCmd';

const program = initProgram();

postTweetCmd(program);
postTweetWithRrefCmd(program);

program.parse();