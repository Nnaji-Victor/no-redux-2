import {build, fake} from '@jackfranklin/test-data-bot'

export const buildForm = build({
    fields: {
      username: fake(f => f.internet.userName()),
      password: fake(f => f.internet.password()),
    },
})