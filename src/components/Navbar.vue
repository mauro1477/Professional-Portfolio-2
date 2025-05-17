<template>
	<header class="flex justify-center bg-gray-900">
		<div class="sm:flex sm:justify-between items-center sm:items-center sm:px-4 sm:pt-3 max-w-7xl w-1/1">
			<div class="flex items-center justify-between px-4 py-1 sm:p-0">
			<div>
			<img class="h-20" src="../assets/images/mauros-logo-v1.svg" alt="Mauro website Offical Logo" >
		</div>
		<div class="sm:hidden">
			<button @click="isOpen = !isOpen" type="button" class="flex justify-center items-center bg-gray-900 text-gray-500 focus:outline-none w-6 h-6 rounded-sm">
				<i v-if="!isOpen" class="fa-solid fa-bars text-gray-900"></i>
				<i v-if="isOpen"  class="fa-solid fa-xmark-large text-gray-900"></i>
			</button>
		</div>
		</div class="">
			<div :class="isOpen ? 'flex' : 'hidden'" class="flex-col px-2 pb-4 sm:flex sm:p-0">
		   <div class="sm:flex">
				<a @click="navBarClick" class="block sm:mt-1 py-1 px-2 text-white font-semibold rounded hover:bg-gray-800 cursor-pointer" id="bio" >Bio</a>
				<a @click="navBarClick" class="block mt-1 py-1 px-2 text-white font-semibold rounded hover:bg-gray-800  sm:ml-2  cursor-pointer" id="projects" >Portfolio</a>
				<a @click="navBarClick" class="block mt-1 py-1 px-2 text-white font-semibold rounded hover:bg-gray-800  sm:ml-2  cursor-pointer" id="education" >Education</a>
			</div>
			<div class="contact-banner">
				<a class="px-2" href="https://www.linkedin.com/in/mvjr14/" target="_blank" rel="noopener noreferrer">
					<i class="fa-brands fa-linkedin-in font-semibold"></i>
				</a>
				<a href="https://github.com/mauro1477" target="_blank" rel="noopener noreferrer">
					<i class="fa-brands fa-github font-semibold"></i>
				</a>
				<a href="mailto:maurovargas7725@gmail.com" class="px-2">
					<i class="fa-solid fa-envelope font-semibold"></i>
				</a>
				<a href="tel:12082900785" class="text-white px-2">
					<i class="fa-solid fa-phone font-semibold"></i> : 208-290-0785
				</a>
			</div>
			</div>
		</div>
	</header>
</template>

  <script>

  export default {
    name: 'Navbar',
	data(){
		return {
			isOpen: false
		}
	},
	methods:{
		navBarClick(event){
			let mystring = event.target.id  + "-section"
			const element = document.getElementById(mystring);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
  }
  </script>

  <style scoped>
	.contact-banner{
		a{
			color:white;
		}
	}
  </style>