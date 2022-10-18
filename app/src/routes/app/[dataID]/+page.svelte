<script>
  import { page } from "$app/stores";

  $: dataID = $page.params.dataID;
</script>

<div class="container">
  <p>{dataID}</p>
</div>
