
<template>
		<Navbar></Navbar>
		<Bio/>
		<ProjectsBlock></ProjectsBlock>
		<EducationBlock></EducationBlock>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Bio from './components/Bio.vue';
import ProjectsBlock from './components/ProjectsBlock.vue';
import EducationBlock from './components/EducationBlock.vue';
export default{
	components:{
		Navbar,
		Bio,
		ProjectsBlock,
		EducationBlock
	}
}
</script>

<style scoped>

</style>
