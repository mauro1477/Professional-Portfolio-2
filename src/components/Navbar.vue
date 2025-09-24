<template>
	<header class="flex justify-center bg-gray-900">
		<div class="sm:flex sm:justify-between items-center sm:items-center sm:px-4 sm:pt-3 sm:pb-2 max-w-7xl w-1/1">
			<div class="flex items-center justify-between px-4 py-2 sm:p-0">
			<div>
			<img class="h-16" src="../assets/images/mauros-white-logo.webp" alt="Mauro website Official Logo" >
		</div>
		<div class="sm:hidden">
			<button @click="isOpen = !isOpen" type="button" class="flex justify-center items-center bg-gray-900 text-gray-500 focus:outline-none w-6 h-6 rounded-sm">
				<i v-if="!isOpen" class="fa-solid fa-bars text-white text-2xl"></i>
				<i v-if="isOpen"  class="fa-solid fa-xmark-large text-white text-2xl"></i>
			</button>
		</div>
		</div class="">
			<div :class="isOpen ? 'flex' : 'hidden'" class="flex-col px-2 pb-4 sm:flex sm:p-0 items-start">
				<div class="sm:flex sm:space-x-2 md:space-x-6">
					<a
						@click="navBarClick"
						class="block py-1 px-2 text-white font-semibold rounded hover:bg-gray-800 cursor-pointer"
						id="bio"
					>Bio</a>

					<a
						@click="navBarClick"
						class="block mt-1 sm:mt-0 py-1 px-2 text-white font-semibold rounded hover:bg-gray-800 cursor-pointer"
						id="projects"
					>Portfolio</a>

					<a
						@click="navBarClick"
						class="block mt-1 sm:mt-0 py-1 px-2 text-white font-semibold rounded hover:bg-gray-800 cursor-pointer"
						id="education"
					>Education</a>
				</div>
				<div class="contact-banner flex items-center sm:space-x-2 md:space-x-6">
					<a href="https://www.linkedin.com/in/mvjr14/" target="_blank" rel="noopener noreferrer">
						<i class="fa-brands fa-linkedin-in font-semibold block py-1 px-2 text-white font-semibold rounded hover:bg-gray-800 cursor-pointer"></i>
					</a>
					<a href="https://github.com/mauro1477" target="_blank" rel="noopener noreferrer">
						<i class="fa-brands fa-github font-semibold block py-1 px-2 text-white font-semibold rounded hover:bg-gray-800 cursor-pointer"></i>
					</a>
					<a href="mailto:maurovargas7725@gmail.com">
						<i class="fa-solid fa-envelope font-semibold block py-1 px-2 text-white font-semibold rounded hover:bg-gray-800 cursor-pointer"></i>
					</a>
					<a href="tel:12082900785" class="text-white flex items-center">
						<i class="fa-solid fa-phone font-semibold"></i>
						<span class="ml-2 block py-1 px-2 text-white font-semibold rounded hover:bg-gray-800 cursor-pointer">208-290-0785</span>
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