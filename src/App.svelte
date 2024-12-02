<script>
  import { onMount } from "svelte";

  onMount(() => {
    const tabs = document.querySelectorAll(".tabs .tab");
    const contents = document.querySelectorAll(".tab-contents .content");

    // Add click event listener to each tab
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetTab = tab.getAttribute("data-tab");

        // Update tabs' ARIA attributes and classes
        tabs.forEach(t => {
          t.setAttribute("aria-selected", t.getAttribute("data-tab") === targetTab);
          t.classList.toggle("active", t.getAttribute("data-tab") === targetTab);
        });

        // Update contents' visibility and ARIA attributes
        contents.forEach(content => {
          if (content.getAttribute("data-tab") === targetTab) {
            content.hidden = false;
            content.setAttribute("aria-hidden", "false");
          } else {
            content.hidden = true;
            content.setAttribute("aria-hidden", "true");
          }
        });
      });
    });
  });
</script>

<style>
  .active {
    font-weight: bold;
    border-bottom: 2px solid #007bff;
  }
</style>