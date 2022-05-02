---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

# RUG::B Demo

When does a component in Bridgetown render? Let's find out!
{:style="text-align:center"}

<section style="margin-block-start: 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem">

  <%= render Timebox.new %>

  <turbo-frame id="timeboxed" src="/timebox">
    <p><em>Loading…</em></p>
  </turbo-frame>

  <time-box-lit>
    <p slot="loading"><em>Loading…</em></p>
  </time-box-lit>

  <%= lit data: {} do %>
    <time-box-lit>
      <p slot="loading"><em>Loading…</em></p>
    </time-box-lit>
  <% end %>
</section>
