<template>
  <div class="container mx-auto pt-6">
    <article>
        <ContentDoc class="text-gray-800 prose" />
    </article>
  </div>
</template>


<style>
.prose {
    max-width: unset
}

.prose h1 {
    margin-bottom: 0
}

.prose h2:before,.prose h3:before {
    display: block;
    content: " ";
    margin-top: -40px;
    height: 40px;
    visibility: hidden;
    pointer-events: none
}

.prose h2 a:before,.prose h3 a:before {
    content: "#";
    color: #00cd81;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.75rem;
    line-height: 2rem;
    margin-left: -1.25rem;
    padding-right: .5rem;
    position: absolute
}

.prose h4 {
    text-decoration: underline
}

.prose table {
    border: 1px solid #dfd9d9
}

.prose table td,.prose table th {
    text-align: center
}
</style>
