import FirstPageTitle from '../components/FirstPageTitle.vue'

export default {
  title: 'Components/FirstPageTitle',
  component: FirstPageTitle,
}

export const FirstPageTitleTest = () => ({
  components: { FirstPageTitle },
  template: '<FirstPageTitle title-text-here="TEST" />',
})
