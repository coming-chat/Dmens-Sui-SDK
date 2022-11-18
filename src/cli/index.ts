import { initProgram } from './option';
import { postTweetCmd,postTweetWithRrefCmd } from './tweetCmd';
import { updateprofileCmd,adminProfileCmd } from './profileCmd';

const program = initProgram();

postTweetCmd(program);
postTweetWithRrefCmd(program);
updateprofileCmd(program);
adminProfileCmd(program);

program.parse();