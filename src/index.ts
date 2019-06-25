import Masto from "masto";

(async () => {
  const masto = await Masto.login({
    uri: "https://mastodon.social"
  });

  // rest
  const instance = await masto.fetchInstance();
  console.log(instance);

  // streamig
  const stream = await masto.streamPublicTimeline();
  stream.on("update", status => console.log(status.content));
})();
