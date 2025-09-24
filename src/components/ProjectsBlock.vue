<template >
   <h1 id="projects-section" class="flex justify-center font-bold text-2xl mb-2 mt-2">Portfolio</h1>
	<div class="flex flex-wrap mt-2 mb-4 max-w-[1640px] m-auto">
		<div class="md:w-1/3 sm:w-1/2 flex p-4" v-for="project in projectsData" key="index">
			<div class="rounded overflow-hidden shadow-lg">
				<img class="w-full" :src="project.image" :alt="project.alt" width="400" height="400">
				<div class="px-4 py-4">
					<a :href="project.url" target="_blank" rel="noopener noreferrer">
						<h2 class="font-bold text-xl mb-2">{{project.name}}</h2>
					</a>
				</div>
				<div class="px-4 pt-0 pb-4">
						<p class="max-w-fit text-gray-700 text-base">Technologies:</p>
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mt-2 last:mr-0"  v-for="technology in project.technologies">{{technology}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import projectsData from '../projects-data';
export default {
    name: "Projects Block,",
	data(){
		return {
			projectsData : projectsData
		}
	}
}
</script>
<style>
    
</style>