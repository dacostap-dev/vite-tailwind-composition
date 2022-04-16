<template>
  <div class="flex">
    <Nav></Nav>
    <div class="relative flex min-h-min w-full flex-col">
      <main class="h-5/6 bg-purple-400">
        <div class="container mx-auto p-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            vero vel, deleniti a dolorem nihil quia quo neque quasi, tempore
            provident explicabo dicta autem nesciunt veniam fugit iste delectus
            culpa similique blanditiis itaque, repellat placeat incidunt magni?
            Neque quas ad odio itaque quasi. Laudantium consequuntur tempore,
            voluptate aperiam architecto laboriosam accusantium minus iure iste
            nemo ad dolorem odio quasi adipisci voluptatibus commodi quod
            aliquid saepe ipsum cumque rerum dolores. Autem excepturi voluptas
            libero dolorem earum sequi facere corporis deserunt iste debitis eum
            ab sunt numquam, amet molestiae, quae animi. Id libero sit pariatur
            sequi iure consequuntur quisquam sapiente distinctio exercitationem
            non. Sint earum nesciunt molestias nisi quo temporibus perferendis
            reprehenderit ab quod, aut harum dignissimos velit doloremque atque
            a vel voluptatum? Voluptates repellat omnis asperiores accusamus
            dolorum esse et autem rerum. Et repudiandae excepturi consequatur
            placeat deserunt. Quasi non numquam eos magni doloremque voluptate
            laboriosam deleniti ab dolorum corrupti? Assumenda voluptas beatae
            iusto eum, saepe perspiciatis corporis excepturi, alias itaque
            mollitia harum. Consequatur officiis consectetur illum natus iure
            quae accusamus architecto aliquam aperiam! Qui exercitationem
            eveniet, magni minima eius similique recusandae sint quidem
            repellendus? Earum similique nemo reprehenderit libero rem cumque
            perferendis nulla nihil consectetur rerum quibusdam inventore enim
            iusto neque asperiores porro, cupiditate, omnis nobis quia non
            exercitationem! Placeat, officiis aut ab et maiores laborum harum
            qui mollitia fuga architecto numquam eius rem minus, obcaecati modi
            repellendus esse sed earum necessitatibus asperiores? Incidunt dolor
            consequatur quo consectetur corrupti non dolorum, molestiae, saepe
            debitis beatae, pariatur assumenda est sed eveniet ex. Corporis
            earum culpa natus nisi, cupiditate eligendi sapiente! Enim sequi a
            rerum quia cupiditate neque optio molestias totam consequatur
            tempore, modi et nesciunt doloremque ut, maiores, commodi sint
            itaque quidem dicta eaque excepturi? Sint laborum, est labore soluta
            iusto dicta error nemo porro autem in accusamus sed. Consequatur non
            quaerat ullam blanditiis ipsa consectetur dolorem ad reprehenderit
            unde ducimus aliquam nemo molestias necessitatibus, impedit debitis
            est modi. Sunt eaque adipisci, eligendi non assumenda nesciunt
            repudiandae eum aliquam quis minima esse illum deleniti itaque rem
            eius. Eum reiciendis beatae omnis facilis excepturi cumque dolorem
            necessitatibus consequatur doloremque, eos tenetur quis amet aliquam
            quidem aspernatur ab inventore. Iste ex mollitia voluptas accusamus
            ipsam! Libero laudantium doloribus modi, esse iusto officiis cumque
            veniam nam cupiditate sequi voluptas non dolores omnis tempora
            debitis molestias repudiandae, dolore facilis labore aliquid aperiam
            reiciendis laboriosam. Eum nam quos quidem enim nemo! Modi dolorem
            deserunt minus culpa!
          </p>
        </div>
      </main>
      <footer
        class="container absolute bottom-0 right-0 left-0 mx-auto h-1/6 w-full columns-3 bg-green-400 p-10"
      >
        <li class="list-disc">1</li>
        <li class="list-disc">1</li>
        <li class="list-disc">1</li>
        <li class="list-disc">1</li>
        <li class="list-disc">1</li>
        <li class="list-disc">1</li>
      </footer>
    </div>
  </div>

  <!-- <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    TEST
    <slot />
  </button>
  <div
    class="p-6 max-w-sm mx-auto | bg-white rounded-xl shadow-lg flex items-center space-x-4"
  >
    <div class="shrink-0">
      <img class="h-12 w-12" src="./assets/logo.png" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div> -->
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    Nav: defineAsyncComponent(() => import("../components/Nav.vue")),
  },
};
</script>

<style></style>
