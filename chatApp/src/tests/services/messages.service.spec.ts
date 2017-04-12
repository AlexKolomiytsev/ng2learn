import {MessagesService} from '../../app/services/messages.service'

import {Message} from '../../app/models/message.model'
import {User} from '../../app/models/user.model'
import {Thread} from '../../app/models/thread.model'

describe('MessagesService', () => {
  it('should test', () => {
    let author: User = new User('Nate', '')
    let thread: Thread = new Thread('t1', 'Nate', '')

    let m1: Message = new Message({author, text: 'Hi!', thread})
    let m2: Message = new Message({author, text: 'Bye!', thread})

    let messagesService: MessagesService = new MessagesService()

    //listen to each message individually as it comes in
    messagesService.newMessages
      .subscribe((message: Message) => {
        console.log(`=> newMessages: ${message.text}`)
      })

    //listen to the stream of most current messages
    messagesService.messages
      .subscribe((messages: Message[]) => {
        console.log(`=> messages: ` + messages.length)
      })

    messagesService.addMessage(m1)
    messagesService.addMessage(m2)

    // => messages: 1
    // => newMessages: Hi!
    // => messages: 2
    // => newMessages: Bye!
  })
})
