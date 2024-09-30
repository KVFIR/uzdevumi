import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import defaultData from '../data/defaultData.json'
import { getRandomIntFromInterval } from './getRandomIntFromInterval'
import dayjs from 'dayjs'

export const addDefaultContent = (uid: string) => {
  const { defaultSpaces, defaultTasks, defaultStatuses, defaultGoals, defaultGoalSteps } = defaultData

  defaultSpaces.forEach(async (item, index) => {
    await setDoc(doc(db, 'spaces', uid + index), {
      ...item,
      uid: uid,
    })
  })

  defaultStatuses.forEach(async (item, index) => {
    await setDoc(doc(db, 'statuses', uid + index), {
      ...item,
      spaceId: index < 6 ? uid + 0 : uid + 1,
      uid: uid,
    })
  })

  defaultTasks.forEach(async (item, index) => {
    const randomDateOffset = getRandomIntFromInterval(0, 200)
    const fromDateShift = getRandomIntFromInterval(randomDateOffset, 20 + randomDateOffset)
    const dueDateShift = getRandomIntFromInterval(randomDateOffset, 35 + randomDateOffset)

    await setDoc(doc(db, 'tasks', uid + index), {
      ...item,
      spaceId: index < 9 ? uid + 0 : uid + 1,
      statusId: index < 9 ? uid + getRandomIntFromInterval(0, 6) : uid + getRandomIntFromInterval(6, 10),
      uid: uid,
      fromDate: fromDateShift < dueDateShift ? dayjs().add(fromDateShift, 'hours').unix() : null,
      dueDate: fromDateShift < dueDateShift ? dayjs().add(dueDateShift, 'hours').unix() : null,
    })
  })

  defaultGoals.forEach(async (item, index) => {
    await setDoc(doc(db, 'goals', uid + index), {
      ...item,
      uid: uid,
    })
  })

  defaultGoalSteps.forEach(async (item) => {
    if (item.type === 'task') {
      await addDoc(collection(db, 'goalSteps'), {
        ...item,
        taskID: uid + Math.floor(Math.random() * 15),
        goalID: uid + getRandomIntFromInterval(0, 1),
        uid: uid,
      })
    } else {
      await addDoc(collection(db, 'goalSteps'), {
        ...item,
        goalID: uid + getRandomIntFromInterval(0, 1),
        uid: uid,
      })
    }
  })
}
