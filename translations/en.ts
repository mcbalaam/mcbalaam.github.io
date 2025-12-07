export default {
  aboutMe:
    "hey there. name's Max, I'm learning web development and Rust in shape of microservices and GUI apps. I contribute small features to /tg/station from time to time, write Telegram bots and help set them up. open for bounties -w-",
  myMidniht: "my midnight is your",
  active: "usually I'm active 9-23",
  connections: "Connections",
  auth: "Authenticating...",
  loginWithGithub: "Sign in with GitHub",
  toLeaveSigns: "to leave signs!",
  fetchingSigns: "Fetching signs...",
  authViaGitHub: "Authenticated via GitHub",
  sign_header: "Leave a Sign",
  sign_noneYet: "Nothing here yet — be the first one to say hi!",
  sign_aboutHeader: 'What is a "sign", anyways?',
  sign_aboutDesc:
    'Sign is a way of saying "hey, I was here!". Maybe you want others to know something about me or just wanna say hi — you won\'t stay unnoticed! \nYou can leave your sign anonymously, which will hide your GitHub profile and randomize your username.',
  sign_placeholder: "Message body (optional):",
  sign_anonymous: "Stay anonymous",
  sign_anonymousExplain:
    "When leaving a sign anonymously, your GitHub username will be randomized",
  sign_sendAction: "Confirm and send",
  sign_sending: "Sending...",
  sign_toastAlreadyLeft: "You already left a sign!",
  sign_toastRestricted:
    "You can't leave signs. Perhaps you've done something bad. Shame on you.",
  sign_toastSent: "Sign sent!",
  sign_toastErrorNetwork: "Network request failed",
  sign_toastErrorOther: "Something went wrong. Please try again later...",
  sign_hashMatched: "This sign's hash matched!",
  sign_alreadyLeft: "You already left a sign!",
  sign_blacklisted: "You were blacklisted.",
  sign_error: "Something went wrong.",
  sign_deleteTitle: "Delete this sign?",
  sign_deleteText:
    "Are you sure you want to delete this sign? This can't be undone and will wipe the data.",
  sign_deleteConfirm: "Delete",
  sign_deleteCancel: "Keep it",
  hashes_title: "What are hashes?",
  hashes_about:
    "Hashing is a technique of generating unique text strings based on some data. The method used ensures identical input data results in identical output.",
  hashes_matched:
    "This sign's hash matched the one that was generated when it was just created — that means it wasn't modified!.. likely. I'm still able to do that, I'm just too lazy to generate the hash manually.",
  hashes_notMatched:
    "This sign's hash didn't match the one that was generated when it was just created; this sign was touched by someone's filthy hands. Wonder who that could've been...",
} as const;
