<template lang="html">
  <div
    class="w-screen h-screen absolute top-0 end-0 bottom-0 left-0 bg-gray-500/70 p-4 py-8 px-4 z-50 flex items-start justify-center overflow-hidden"
  >
    <div
      class="w-full sm:w-[50%] max-w-[400px] h-auto p-4 bg-white rounded-lg shadow-xl"
    >
      <!-- modal header -->
      <div class="flex items-center justify-between mb-8 gap-4">
        <div class="flex-1">
          <h2 class="text-lg">تسجيل الدخول</h2>
          <span class="text-xs text-gray-500"
            >قم بتسجيل الدخول لمتابعة التسوق</span
          >
        </div>
        <button
          @click="closeLoginDialog"
          type="button"
          class="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border border-red-500 text-red-500 rounded-full p-1"
        >
          <i class="sicon-cancel"></i>
        </button>
      </div>
      <div class="flex flex-col w-full">
        <Form class="flex flex-col" @submit="login">
          <div class="mb-4">
            <label class="block mb-2 text-md" for="name">اسم المستخدم</label>
            <Field
              type="text"
              name="name"
              rules="required|minLength:3"
              id="name"
              autocomplete
              class="w-full p-2 bg-white appearance-none rounded-md border text-md"
              placeholder="اسم المستخدم.."
            />
            <ErrorMessage class="text-red-500" name="name" />
          </div>
          <div class="mb-4">
            <label class="block mb-2 text-md" for="password">كلمة المرور</label>
            <Field
              type="password"
              name="password"
              rules="required|minLength:8"
              autocomplete
              id="password"
              class="w-full p-2 bg-white appearance-none rounded-md border text-md"
              placeholder="كلمة المرور.."
            />
            <ErrorMessage class="text-red-500" name="password" />
          </div>
          <div class="flex gap-4">
            <button
              type="submit"
              class="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md"
            >
              دخول
            </button>
            <button
              type="button"
              class="w-fit text-primary underline p-2 text-md rounded-md"
            >
              نسيت كلمة المرور؟
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Form, Field, ErrorMessage } from 'vee-validate';

  export default  {
    name: 'login',
    components: {
      Form,
      Field,
      ErrorMessage
    },
    props: ['closeLoginDialog', 'login'],
    setup(props){
      return {
        ...props,
      }
    }
}
</script>

<style scoped lang="scss">
.login {
}
</style>
