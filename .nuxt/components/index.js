export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as CandidateDetails } from '../../components/candidateDetails/candidateDetails.vue'
export { default as InfoSection } from '../../components/infoSection/infoSection.vue'
export { default as InfoSectionQuestionGallery } from '../../components/infoSection/questionGallery.vue'
export { default as InfoSectionTestMbd } from '../../components/infoSection/testMbd.vue'
export { default as NavBar } from '../../components/navBar/navBar.vue'
export { default as NavBarTimer } from '../../components/navBar/timer.vue'
export { default as QuestionsOptions } from '../../components/questions/options.vue'
export { default as Questions } from '../../components/questions/questions.vue'
export { default as ResultTable } from '../../components/resultPage/resultTable.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
