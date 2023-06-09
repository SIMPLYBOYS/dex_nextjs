export const headerStyle = {
    container: `p-3 w-screen flex justify-between items-center`,
    logo: `w-1/3 justify-start`,
    navContainer: `flex bg-box_black rounded-2xl items-center border border-box_border`,
    inactiveNavItem: `px-6 py-2 text-lg text-text_gray m-1`,
    activeNavItem: `px-6 py-2 text-lg bg-box_gray rounded-2xl m-1`,
    buttonsContainer: `flex w-1/3 justify-end items-center`,
    chainContainer: `flex items-center px-4`,
    chainIcon: `w-5 h-5 mr-2`,
    accountContainer: `flex items-center rounded-3xl bg-box_gray`,
    accountText: `text-lg mx-5 my-2`,
    connect: `flex items-center rounded-3xl bg-box_dark_blue text-text_blue cursor-pointer`,
    connectText: `mx-5 my-2 hover:text-text_dark_blue`,
}

export const swapStyle = {
    outerContainer: `flex justify-center py-10`,
    container: `items-center w-[30rem] rounded-2xl bg-box_black border border-box_border`,
    boxHeader: `m-4 text-l`,
    currencyContainer: `flex mx-2 my-0.5 bg-box_gray rounded-2xl px-4 py-3 text-3xl border border-box_black hover:border-box_border focus-within:border-box_border justify-between`,
    currencyInput: `bg-transparent outline-none mt-2 mb-4 w-full placeholder:text-text_dark_gray text-3xl truncate`,
    currencySelectorContainer: `w-full flex flex-col`,
    currencySelector: `flex w-full justify-end mt-2`,
    currencyBalanceContainer: `flex justify-end`,
    currencyBalance: `text-sm text-text_gray mt-2 truncate w-4/6`,
    arrowContainer: `flex flex-col w-full items-center`,
    arrowBox: `flex flex-col items-center bg-box_light_gray border-4 border-box_black rounded-xl w-10 h-10 -m-6`,
    arrowIcon: `h-4 w-5 mt-2 text-text_gray`,
    confirmButton: `bg-box_blue hover:bg-box_hover_blue m-2 rounded-2xl py-4 text-xl flex justify-center cursor-pointer`,
    inactiveConfirmButton: `bg-box_gray text-text_dark_gray m-2 rounded-2xl py-4 text-xl flex justify-center cursor-default`,
}

export const tokenComboboxStyle = {
    innerContainer: ``,
    button: `flex items-center w-full py-1 px-3 rounded-3xl text-xl bg-box_light_gray`,
    buttonDefault: `flex items-center w-full py-1 px-3 rounded-3xl text-xl bg-box_blue`,
    downIcon: `h-4 w-4 ml-2`,
    options: `absolute mt-1 w-[10rem] overflow-auto text-sm bg-box_light_gray rounded-md shadow-lg shadow-box_black`,
    input: `w-full py-2 px-4 bg-box_light_gray focus:outline-none`,
    unmatch: `text-text_gray py-2 pl-4`,
    option: `relative cursor-pointer select-none py-2 pl-10`,
    optionActive: `relative cursor-pointer select-none py-2 pl-10 bg-box_hover_light_gray`,
    tokenLogo: `h-6 w-6 -ml-2 mr-2`,
    checkIcon: `h-4 w-4`,
    checkIconContainer: `absolute inset-y-0 left-0 flex items-center pl-3`,
    tokenContainer: `flex`,
    tokenSymbol: `ml-3 block truncate font-normal`,
    tokenSymbolSelected: `ml-3 block truncate font-semibold`,
}

export const txDialogStyle = {
    dialog: `relative z-10`,
    overlay: `fixed inset-0 bg-background0 opacity-60`,
    panelContainer: `flex min-h-full items-center justify-center text-center fixed inset-0 overflow-y-auto`,
    panel: `w-full max-w-md rounded-2xl bg-white p-6 text-left shadow-xl transition-all`,
    title: `text-lg text-center font-medium text-text_dark_gray`,
    body: `text-text_dark_gray text-center`,
    buttonContainer: `flex justify-center mt-6`,
    button: `items-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`,
    linkText: `text-blue-600 underline visited:text-purple-600 hover:text-blue-800`,
    p: `mt-5`,
}

export const poolStyle = {
    outerContainer: `flex justify-center py-10`,
    container: `pt-5 w-[40rem]`,
    headerContainer: `flex items-center`,
    title: `flex w-1/2 justify-start text-4xl`,
    addLiquidityButtonContainer: `flex w-1/2 justify-end`,
    addLiquidityButton: `bg-box_blue hover:bg-box_hover_blue m-2 rounded-xl py-2 text-xl flex justify-center cursor-pointer`,
    addLiquidityButtonText: `px-4`,
    positionsContainer: `bg-box_black rounded-2xl items-center border border-box_border mt-4 divide-y divide-box_border`,
    positionsDefault: `flex flex-col items-center text-text_dark_gray m-5`,
    inboxIcon: `h-16 w-16`,
}

export const positionItemStyle = {
    header: `flex p-1`,
    pairLogoContainer: `flex items-center ml-3`,
    pairTextContainer: `m-2 text-lg`,
    balanceContainer: `w-full flex items-center`,
    balance: `w-2/3 flex flex-col text-text_gray ml-4 mb-2`,
    balanceText: `truncate`,
    removeButtonContainer: `w-1/3 flex justify-end`,
    removeButton: `bg-box_blue hover:bg-box_hover_blue pl-1 mx-2 pr-2 rounded-lg text-lg flex justify-center cursor-pointer items-center`,
    inactiveRemoveButton: `bg-box_gray text-text_dark_gray pl-1 mx-2 pr-2 rounded-lg text-lg flex justify-center cursor-pointer items-center`,
    circleIcon: `h-4 w-4 mr-0.5 mt-0.5`,
}

export const AddLiquidityStyle = {
    dialog: `relative z-10`,
    overlay: `fixed inset-0 bg-background0 opacity-60`,
    panelContainer: `flex min-h-full items-center justify-center text-center fixed inset-0 overflow-y-auto`,
    panel: `w-[35rem] rounded-2xl bg-box_black border border-box_border p-6 text-left divide-y divide-box_border`,
    titleContainer: `flex justify-center m-3`,
    title: `text-2xl text-white text-center`,
    currencyContainer: `flex mt-4 items-center justify-start`,
    currencyInputContainer: `ml-5`,
    currencyInput: `w-full bg-transparent outline-none text-3xl truncate`,
    currencySelector: `w-[15rem] flex justify-end`,
    currencyBalanceContainer: `flex justify-end`,
    currencyBalance: `text-sm text-text_gray mt-2 truncate w-4/6 text-right`,
    messageContainer: `flex justify-center mt-5 mx-16 text-center`,
    buttonOuterContainer: `flex justify-center mt-16`,
    confirmButtonContainer: `flex justify-center`,
    confirmButton: `bg-box_blue hover:bg-box_hover_blue p-2 rounded-xl text-lg flex justify-center cursor-pointer items-center`,
    inactiveConfirmButton: `bg-box_gray text-text_dark_gray p-2 rounded-xl text-lg flex justify-center cursor-pointer items-center`,
    buttonListContainer: `flex flex-col`,
    approveButton: `bg-box_blue hover:bg-box_hover_blue p-2 rounded-xl text-lg flex justify-center cursor-pointer items-center mx-2 mb-4`,
}