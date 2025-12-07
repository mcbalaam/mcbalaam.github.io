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
  sign_hashMatched: "This sign's signature matched!",
  sign_hashMismatch: "Signature verification failed!",
  sign_alreadyLeft: "You already left a sign!",
  sign_blacklisted: "You were blacklisted.",
  sign_error: "Something went wrong.",
  sign_deleteTitle: "Delete this sign?",
  sign_deleteText:
    "Are you sure you want to delete this sign? This can't be undone and will wipe the data.",
  sign_deleteConfirm: "Delete",
  sign_deleteCancel: "Keep it",
  sign_toastDeleted: "Sign deleted successfully!",
  sign_toastDeleteError: "Failed to delete sign",
  logout_toastSuccess: "Logged out successfully!",
  logout_toastError: "Failed to log out",
  hashes_title: "Signature verified!",
  hashes_mismatchTitle: "Signature verification failed",
  hashes_about:
    "Each sign is cryptographically signed using Ed25519. The signature is generated from the message, timestamp, and user ID, then verified with a public key.",
  hashes_mismatchAbout:
    "This sign's cryptographic signature could not be verified. The data may have been modified or the signature is invalid.",
  hashes_matched:
    "Signature verified successfully! This sign's cryptographic signature matches the original data — it hasn't been tampered with.",
  hashes_error: "Verification error",
  hashes_signature: "missing signature data",
} as const;
