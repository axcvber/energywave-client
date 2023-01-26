export type OptionType = {
  value: number
  label: string
}

const options: OptionType[] = []
for (let i = 0; i < 500; ++i) {
  options.push({
    value: i + 1,
    label: `Option ${i + 1}`,
  })
}

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, ms)
  })

const optionsPerPage = 10

export const loadOptions = async (search: string, page: number) => {
  await sleep(1000)

  let filteredOptions: OptionType[]
  if (!search) {
    filteredOptions = options
  } else {
    const searchLower = search.toLowerCase()

    filteredOptions = options.filter(({ label }) => label.toLowerCase().includes(searchLower))
  }

  const hasMore = Math.ceil(filteredOptions.length / optionsPerPage) > page
  const slicedOptions = filteredOptions.slice((page - 1) * optionsPerPage, page * optionsPerPage)

  return {
    options: slicedOptions,
    hasMore,
  }
}
