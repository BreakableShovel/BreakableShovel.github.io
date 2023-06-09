<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
  let eliza = new ElizaBot();
  let chat = [{ user: "eliza", text: eliza.getInitial() }];
  let chatmessages = []
  let replymessages = []
  async function write(message) {
    // TODO: yeet in the new message
    // random delay for writing
    let reply=eliza.transform(message)
    console.log(reply);
    chatmessages.push(message)
    // TODO: write the text
    replymessages.push(reply)
    replymessages = replymessages;
    chatmessages = chatmessages;
    }
</script>


<svelte:head>
  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<div>
  <h1 class="container">Ask away</h1>
  <div>
    <!-- TODO: loop over the messages and display them -->
    <article>
      <span>
        {chat[0].text}
      </span>
    </article>
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
    }}
  >
    <input type="text" name="text" />
  </form>
  <div class="messagetext">
    {#each chatmessages as message}
    <p>You: {message}</p>
    {/each}
  </div>
  <div class="elizatext">
    {#each replymessages as message}
    <p>Elizabot: {message}</p>
    {/each}
  </div>
</div>
<style>
  .container{
    top: 300px;
    left: 100%;
  }

  .messagetext{
    position:absolute;
    left: 100px;
    top: 120px;
  }

  .elizatext{
    position:absolute;
    left: 900px;
    top: 120px;
  }
</style>