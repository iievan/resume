<template>
    <div class="mimalism-resume">
        <SectionsResumeHeader
            :name="resume.personal.name"
            :titles="resume.personal.titles"
        />

        <main class="mimalism-main">
            <div class="mimalism-container">
                <SectionsContactsSection
                    :contacts="resume.contacts"
                    :section-label="resume.sections.contacts"
                />
            </div>
        </main>

        <UiDecorativeDivider
            image-url="/images/imagescroll.webp"
            alt="Scroll background"
            label="Section I | Skills & Experience"
        />

        <main class="mimalism-main">
            <div class="mimalism-container">
                <SectionsSkillsSection
                    :skills="resume.skills"
                    :section-label="resume.sections.skills"
                />
                <SectionsExperienceSection
                    :experience="resume.experience"
                    :section-label="resume.sections.experience"
                />
            </div>
        </main>

        <UiDecorativeDivider
            image-url="/images/imagescroll.webp"
            alt="Scroll background"
            label="Section II | Short Review"
        />

        <main class="mimalism-main">
            <div class="mimalism-container">
                <SectionsEducationSection
                    :institution="resume.education.institution"
                    :education="resume.education.education"
                    :section-label="resume.sections.education"
                />
                <SectionsProjectsSection
                    :projects="resume.projects"
                    :section-label="resume.sections.projects"
                />
            </div>
        </main>

        <SectionsResumeFooter
            :name="resume.personal.name"
            :copyright="resume.footer.copyright"
        />
    </div>
</template>

<script setup lang="ts">
const resume = useResumeData();
</script>
