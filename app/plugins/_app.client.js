const objSetting = {
  domain: {
    site: 'https://aival.jp',
    api: 'https://api.aival.jp'
  },
  breakpoint: {
    tb: 960,
    sp: 640
  },
  regexp: {
    email: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
    password: /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/,
    number: /^[0-9-]+$/
  },
  words: {
    errorTitle: 'システムエラー',
    errorMessage: 'しばらく時間を置いてから、<br>再度操作のほどお願いいたします。',
    inputNull: '入力されていません。',
    inputIncomplete: '入力内容に不備があります。',
    inputFileOver: '選択上限を超えています。',
    selectNull: '項目が選択されていません。',
    submitProcessing: '処理中'
  },
  /* ========== ↓ local ↓ ========== */
  url: {
  },
  api: {
    /**
     *  API 設定
     * @variable {String} url -> APIURL
     * @variable {String} method -> POST or GET or PUT
     * @variable {String} type -> form or json
     * @variable {Boolean} author -> true or false
     * @variable {Boolean} toast -> true or false
     * @variable {String} successTitle
     * @variable {String} successMessage
     * @variable {String} errorTitle
     * @variable {String} errorMessage
     */
    contact: {
      url: 'https://api.aival.jp/app/post/contact/',
      method: 'POST',
      type: 'form',
      author: false,
      toast: true,
      successTitle: '送信完了',
      successMessage: '問い合わせメールを送信いたしました',
      errorTitle: '送信エラー',
      errorMessage: '再度入力内容を確認の上、送信してください'
    },
    entry: {
      url: 'https://api.afdb.jp/user/post/entry/',
      method: 'POST',
      type: 'form',
      author: false,
      toast: true,
      successTitle: 'お申し込み送信完了',
      successMessage: 'お申し込み完了メールを送信いたしました<br>メール内容をご確認ください',
      errorTitle: '送信エラー',
      errorMessage: '再度入力内容を確認の上、送信してください'
    },
    login: {
      url: 'https://api.afdb.jp/user/login/',
      method: 'POST',
      type: 'form',
      author: false,
      toast: true,
      successTitle: 'ログイン完了',
      successMessage: '会員ページへ遷移します<br>今しばらくお待ちください',
      errorTitle: 'ログインエラー',
      errorMessage: '入力内容をご確認ください'
    },
    demoLogin: {
      url: 'https://api.afdb.jp/user/post/democode/',
      method: 'POST',
      type: 'form',
      author: false,
      toast: true,
      successTitle: 'デモログイン完了',
      successMessage: 'ダッシュボードへ遷移します<br>今しばらくお待ちください',
      errorTitle: 'デモログインエラー',
      errorMessage: '再度コードをご確認ください'
    },
    inquiryRegist: {
      url: 'https://api.afdb.jp/user/inquiry/',
      method: 'POST',
      type: 'form',
      author: true,
      toast: true,
      successTitle: '登録内容の登録完了',
      successMessage: 'お客様情報の登録が完了しました',
      errorTitle: '登録内容の登録エラー',
      errorMessage: '入力内容をご確認ください'
    },
    inquiryEdit: {
      url: 'https://api.afdb.jp/user/inquiry/',
      method: 'PUT',
      type: 'form',
      author: true,
      toast: true,
      successTitle: '登録内容の更新完了',
      successMessage: 'お客様情報の更新が完了しました',
      errorTitle: '登録内容の更新エラー',
      errorMessage: '入力内容をご確認ください'
    }
  }
  /* ========== ↑ local ↑ ========== */
}

let objValue = {
  height: {
    header: 0,
    nav: 0,
    main: 0,
    footer: 0
  },
  scrollPosition: 0,
  urlParams: {
  }
}

/// Function
const getObjValue = () => {
  return objValue
}

const setUrlParameter = () => {
  if (location.search === '') {
    return
  }
  const param = (location.search.substring(1)).split('&')
  for (let i = 0; i < param.length; i++) {
    const paramItem = param[i].split('=')
    objValue['urlParams'][paramItem[0]] = paramItem[1]
  }
}

const requestFetch = async (url = '', data = {}) => {
  const response = await fetch(url, data)
  return response
}

const getUserAgent = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  let os = ''
  let browse = ''
  // OS
  if (ua.includes('windows nt')) {
    os = 'windows'
  } else if (ua.includes('android')) {
    os = 'android'
  } else if (ua.includes('iphone') || ua.includes('ipad') || (ua.includes('mac os x') && 'ontouchend' in document)) {
    os = 'ios'
  } else if (ua.includes('mac os x')) {
    os = 'macos'
  }
  // Browse
  if (ua.includes('crios') || ua.includes('chrome')) {
    browse = 'chrome'
  } else if (ua.includes('safari')) {
    browse = 'safari'
  }
  return os
  // return browse
}

const getDisplayMode = () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
  let displayMode = ''
  if (document.referrer.startsWith('android-app://')) {
    displayMode = 'twa'
  } else if (navigator.standalone || isStandalone) {
    displayMode = 'standalone'
  } else {
    displayMode = 'browser'
  }
  return displayMode
}

/**
 * [IndexedDB] Insert(put) / Get
 * @param {*} type
 * @param {*} callback
 * @param {*} argsKey
 * @param {*} argsValue
 * @returns
 */
const actionIndexedDB = (type = '', callback, argsKey = '', argsValue = {}) => {
  if (type === '') { return }
  const openRequest = indexedDB.open(process.env.INDEXED_DB_NAME, process.env.INDEXED_DB_VERSION)
  // onerror
  openRequest.onerror = (event) => {
    console.warn('INDEXED -> Open Error')
    console.warn(event)
  }
  // onupgradeneeded
  // バージョン更新 or 新規作成時のみ実行
  openRequest.onupgradeneeded = (event) => {
    console.warn('INDEXED -> Upgrade')
    const db = event.target.result
    const objectStore = db.createObjectStore(process.env.INDEXED_STORE_NAME, { keyPath: 'key' })
  }
  // onsuccess
  openRequest.onsuccess = (event) => {
    console.warn('INDEXED -> Open Succes')
    const db = openRequest.result
    const trans = db.transaction(process.env.INDEXED_STORE_NAME, 'readwrite')
    const store = trans.objectStore(process.env.INDEXED_STORE_NAME)
    if (type === 'get') {
      // Get
      let objIndexedDB = {}
      const getRequest = store.openCursor()
      getRequest.onsuccess = (event) => {
        const cursor = event.target.result
        if (cursor) {
          const cursorKey = cursor.value.key
          const cursorvalue = cursor.value.value
          objIndexedDB[cursorKey] = cursorvalue
          cursor.continue()
        } else {
          // データ終了
          callback(objIndexedDB)
        }
      }
    } else if (type === 'insert') {
      console.warn('insert')
      // Put
      let isIndexedDB = false
      let objIndexedDB = {}
      const getRequest = store.get(argsKey)
      getRequest.onsuccess = (event) => {
        const result = getRequest.result
        if (result !== undefined) {
          Object.assign(objIndexedDB, result.value)
        }
        Object.assign(objIndexedDB, argsValue)
        const putRequest = store.put({ key: argsKey, value: objIndexedDB })
        putRequest.onerror = (event) => {
          console.error('Add Data Error')
          callback(isIndexedDB)
        }
        putRequest.onsuccess = (event) => {
          console.warn('Add Data Success')
          isIndexedDB = true
          callback(isIndexedDB)
        }
      }
    }
    db.close()
    console.warn('actionIndexedDB -> END')
  }
}

const deleteIndexedDB = () => {
  const deleteRequest = indexedDB.deleteDatabase(process.env.INDEXED_DB_NAME)
  // onerror
  deleteRequest.onerror = (event) => {
    console.error('INDEXED -> Delete Error')
    console.error(event)
  }
  // onsuccess
  deleteRequest.onsuccess = (event) => {
    console.warn('INDEXED -> Delete Error')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
}

const getFetchInit = (method = 'POST', type = '', author = false, data = {}) => {
  const storageAuth = JSON.parse(localStorage.getItem('auth'))
  let obj = {}
  let objHeaders = {}
  if (author) {
    if (storageAuth.token !== '') {
      console.log(storageAuth.token)
      objHeaders['Authorization'] = 'Token ' + storageAuth.token
    } else {
      objHeaders['Authorization'] = ''
    }
  }
  if (method === 'POST') {
    if (type === 'json') {
      obj.body = JSON.stringify(data)
      objHeaders['Content-Type'] = 'application/json'
    } else {
      obj.body = data
    }
  }
  if (method === 'GET') {
    if (type === 'json') {
      objHeaders['Content-Type'] = 'application/json'
    }
  }
  if (method === 'PUT') {
    if (type === 'json') {
      obj.body = JSON.stringify(data)
      objHeaders['Content-Type'] = 'application/json'
    } else {
      obj.body = data
    }
  }
  obj.method = method
  obj.headers = objHeaders
  return obj
}

const moveSmoothLink = (id) => {
  let scrollTop = 0
  let optHeight = 0
  const objValueHeight = getObjValue().height
  if (document.querySelector('html').classList.contains('is-drawer')) {
    const drawerTop = document.querySelector('.l-body').getAttribute('data-drawer-top')
    document.querySelector('.l-body').style.position = 'static'
    window.scrollTo(0, drawerTop)
    document.querySelector('html').classList.remove('is-drawer')
    document.querySelector('[js-drawer-toggle]').removeAttribute('disabled')
  }
  if (document.getElementById(id)) {
    const targetY = document.getElementById(id).getBoundingClientRect().top + window.scrollY
    if (document.querySelector('[js-header]') && document.defaultView.getComputedStyle(document.querySelector('[js-header]'), null).position === 'fixed' && document.defaultView.getComputedStyle(document.querySelector('[js-header]'), null).display !== 'none') {
      if (document.querySelector('[js-header]').getAttribute('scroll-hidden') === '' || document.querySelector('[js-header]').getAttribute('scroll-hidden') === null) {
        optHeight += objValueHeight.header
      } else if (!(document.querySelector('[js-header]').getAttribute('scroll-hidden') === 'down' && window.scrollY < targetY) && !(document.querySelector('[js-header]').getAttribute('scroll-hidden') === 'up' && window.scrollY > targetY)) {
        optHeight += objValueHeight.header
      }
    }
    if (document.querySelector('[js-drop]') && document.defaultView.getComputedStyle(document.querySelector('[js-drop]'), null).position === 'fixed' && document.defaultView.getComputedStyle(document.querySelector('[js-drop]'), null).display !== 'none') {
      if (document.querySelector('[js-drop]').getAttribute('scroll-hidden') === '' || document.querySelector('[js-drop]').getAttribute('scroll-hidden') === null) {
        optHeight += objValueHeight.nav
      } else if (!(document.querySelector('[js-drop]').getAttribute('scroll-hidden') === 'down' && window.scrollY < targetY) && !(document.querySelector('[js-drop]').getAttribute('scroll-hidden') === 'up' && window.scrollY > targetY)) {
        optHeight += objValueHeight.nav
      }
    }
    scrollTop = targetY - optHeight
  }
  window.scrollTo({
    top: scrollTop,
    behavior: 'smooth'
  })
}

const switchContent = (id, num) => {
  const elemSwitch = document.querySelector('[switch-id="' + id + '"]')
  if (!elemSwitch) { return }
  const elemSwitchCont = elemSwitch.querySelectorAll('[js-switch-cont]')
  const elemSwitchTab = elemSwitch.querySelectorAll('[js-switch-tab]')
  const elemSwitchSelect = elemSwitch.querySelector('[js-switch-select]')
  if (!num || num < 1 || (elemSwitchTab.length > 0 && num > elemSwitchTab.length) || (elemSwitchSelect && num > elemSwitchSelect.options.length)) {
    if (elemSwitchTab.length > 0) {
      num = elemSwitchTab[0].getAttribute('js-switch-tab')
    }
    if (elemSwitchSelect) {
      num = elemSwitchSelect.options[0].value
    }
  }
  // Contents
  elemSwitchCont.forEach((target) => {
    target.classList.remove('is-active')
    if (parseFloat(target.getAttribute('js-switch-cont')) === parseFloat(num)) {
      target.classList.add('is-active')
    }
  })
  // tab
  if (elemSwitchTab.length > 0) {
    elemSwitchTab.forEach((target) => {
      target.classList.remove('is-active')
    })
    elemSwitch.querySelector('[js-switch-tab="' + num + '"]').classList.add('is-active')
  }
  // select
  if (elemSwitchSelect) {
    elemSwitchSelect.querySelectorAll('option').forEach((target) => {
      target.removeAttribute('selected')
    })
    elemSwitchSelect.querySelector('option[value="' + num + '"]').setAttribute('selected', 'selected')
  }
}

const removeSkeleton = () => {
  setTimeout(() => {
    document.querySelectorAll('[js-skeleton]').forEach((target) => {
      if (target.getAttribute('js-skeleton') !== 'infinite') {
        target.removeAttribute('js-skeleton')
      }
    })
  }, 1000)
}

const onResize = () => {
  const newHeightSetting = new HeightSetting()
  // Drawer - Hidden
  if (window.innerWidth > 768 && document.querySelector('html').classList.contains('is-drawer')) {
    const drawerTop = document.querySelector('.l-body').getAttribute('data-drawer-top')
    document.querySelector('.l-body').style.position = 'static'
    window.scrollTo(0, drawerTop)
    document.querySelector('html').classList.remove('is-drawer')
    document.querySelector('[js-drawer-toggle]').removeAttribute('disabled')
  }
}

const onScroll = () => {
  const objValueAll = getObjValue()
  // ToTop - Display or Hidden
  if (document.querySelector('[js-totop]')) {
    if (window.scrollY > 120) {
      document.querySelector('[js-totop]').classList.add('is-active')
    } else {
      document.querySelector('[js-totop]').classList.remove('is-active')
    }
  }
  // Show - Display
  if (document.querySelector('[js-show]')) {
    document.querySelectorAll('[js-show]').forEach((target) => {
      if (!target.classList.contains('is-show')) {
        if (window.scrollY > target.getBoundingClientRect().top + window.scrollY - window.innerHeight + (window.innerHeight / 2)) {
          target.classList.add('is-show')
        }
      }
    })
  }
  // Scroll - down or up
  if (window.scrollY > objValueAll.scrollPosition) {
    document.querySelector('html').setAttribute('scroll-vertical', 'down')
  } else if (window.scrollY < objValueAll.scrollPosition) {
    document.querySelector('html').setAttribute('scroll-vertical', 'up')
  }
  Object.assign(objValue, {
    scrollPosition: window.scrollY
  })
}

const onMounted = () => {
  console.log('app.js：onMounted')
  const newHeightSetting = new HeightSetting()
  setUrlParameter()
  // Set
  if (document.querySelector('[js-slideshow]')) {
    document.querySelectorAll('[js-slideshow]').forEach((target) => {
      let slideshowOpt = {}
      const newSlideshowComponent = new SlideshowComponent(target.getAttribute('slideshow-id'), slideshowOpt)
    })
  }
  if (document.querySelector('[js-switch]')) {
    document.querySelectorAll('[js-switch]').forEach((target) => {
      const switchId = target.getAttribute('switch-id')
      const switchNum = ''
      switchContent(switchId, switchNum)
    })
  }
  if (document.querySelector('[js-form-year]')) {
    document.querySelectorAll('[js-form-year]').forEach((target) => {
      for (let year = 2021; year >= 1950; year--) {
        if (year === 1990) {
          target.innerHTML += '<option value="' + year + '" selected>' + year + '</option>'
        } else {
          target.innerHTML += '<option value="' + year + '">' + year + '</option>'
        }
      }
    })
  }
  if (document.querySelector('[js-form-month]')) {
    document.querySelectorAll('[js-form-month]').forEach((target) => {
      for (let month = 1; month <= 12; month++) {
        target.innerHTML += '<option value="' + month + '">' + month + '</option>'
      }
    })
  }
  if (document.querySelector('[js-form-day]')) {
    document.querySelectorAll('[js-form-day]').forEach((target) => {
      for (let day = 1; day <= 31; day++) {
        target.innerHTML += '<option value="' + day + '">' + day + '</option>'
      }
    })
  }
  // UrlParameter
  if (Object.keys(objValue['urlParams']).length > 0) {
    // ex. -> switchId={{ SelectorID }}&switchNum={{ NUM }}
    if (objValue['urlParams']['switchId']) {
      const switchId = objValue['urlParams']['switchId']
      const switchNum = parseInt(objValue['urlParams']['switchNum'])
      switchContent(switchId, switchNum)
    }
    // ex. -> linkId={{ SelectorID }}
    if (objValue['urlParams']['linkId']) {
      moveSmoothLink(objValue['urlParams']['linkId'])
    }
  }
  // EventSetting
  const newEventSetting = new EventSetting()
  newEventSetting._addEvent()
  onLoad()
}

const onLoad = () => {
  if (document.querySelector('[js-loader]')) {
    document.querySelector('[js-loader]').classList.add('is-off')
    setTimeout(() => {
      document.querySelector('body').classList.remove('is-loading')
      document.querySelectorAll('.is-show').forEach((target) => {
        target.classList.remove('is-show')
      })
    }, 2000)
  }
  removeSkeleton()
}

const onSubmitForm = (e) => {
  e.preventDefault()
  let isValidate = true
  let objFormValue = {}
  let objFormData = new FormData()
  let objFormOpt = {}
  const dataFormId = e.currentTarget.closest('form').getAttribute('form-id')
  const elemForm = document.querySelector('[form-id="' + dataFormId + '"]')
  // Reset
  elemForm.querySelectorAll('[form-result]').forEach((formResult) => {
    formResult.setAttribute('form-result', '')
    formResult.classList.remove('is-active')
    formResult.innerHTML = ''
  })
  elemForm.querySelectorAll('[form-error]').forEach((formError) => {
    formError.classList.remove('is-active')
    formError.innerHTML = ''
  })
  elemForm.querySelectorAll('input, select, textarea').forEach((item) => {
    // Validation
    if (item.hasAttribute('form-required')) {
      if (item.value === '') {
        isValidate = false
        if (item.tagName === 'SELECT') {
          item.nextElementSibling.innerHTML = objSetting.words.selectNull
        } else {
          item.nextElementSibling.innerHTML = objSetting.words.inputNull
        }
        item.nextElementSibling.classList.add('is-active')
        return
      }
      if (item.getAttribute('form-required') === 'email') {
        if (!objSetting.regexp.email.test(item.value)) {
          isValidate = false
          item.nextElementSibling.innerHTML = objSetting.words.inputIncomplete
          item.nextElementSibling.classList.add('is-active')
          return
        }
      }
      if (item.getAttribute('form-required') === 'password') {
        if (!objSetting.regexp.password.test(item.value)) {
          isValidate = false
          item.nextElementSibling.innerHTML = objSetting.words.inputIncomplete
          item.nextElementSibling.classList.add('is-active')
          return
        }
      }
      if (item.getAttribute('form-required') === 'number') {
        if (!objSetting.regexp.number.test(item.value)) {
          isValidate = false
          item.nextElementSibling.innerHTML = objSetting.words.inputIncomplete
          item.nextElementSibling.classList.add('is-active')
          return
        }
      }
      if (item.getAttribute('form-required') === 'checkbox') {
        if (item.checked === false) {
          isValidate = false
          return
        }
      }
      // if (item.getAttribute('form-required') === 'file') {}
      if (item.getAttribute('form-required') === 'username') {
        if (item.getAttribute('form-status') === 'false') {
          isValidate = false
          item.nextElementSibling.innerHTML = objSetting.words.inputIncomplete
          item.nextElementSibling.classList.add('is-active')
          return
        }
      }
    }
    // Insert
    if (item.hasAttribute('form-option')) {
      // Form Option
      objFormOpt[item.getAttribute('name')] = item.value
    } else if (item.getAttribute('type') === 'file') {
      // Form Data
      if (item.files.length > 0) {
        if (item.hasAttribute('multiple')) {
          for (let i = 0; i < item.files.length; i++) {
            objFormData.append(item.getAttribute('name') + (i + 1), item.files[i])
          }
        } else {
          objFormData.append(item.getAttribute('name'), item.files[0])
        }
      }
    } else {
      // Form Data
      objFormData.append(item.getAttribute('name'), item.value)
      objFormValue[item.getAttribute('name')] = item.value
    }
  })
  // Submit
  if (isValidate) {
    if (elemForm.getAttribute('action') === '') {
      elemForm.querySelector('[form-submit]').setAttribute('disabled', true)
      elemForm.querySelector('[form-submit]').setAttribute('form-submit-text', elemForm.querySelector('[form-submit]').textContent)
      elemForm.querySelector('[form-submit]').textContent = objSetting.words.submitProcessing
      for (let value of objFormData.entries()) {
        console.log(value)
      }
      // objFormValue Ver.
      /*
      const newFormComponent = new FormComponent(dataFormId, objFormValue, objFormOpt)
      */
      // objFormData Ver.
      const newFormComponent = new FormComponent(dataFormId, objFormData, objFormOpt)
    } else {
      elemForm.submit()
    }
  } else {
    const newToast = new ToastComponent(
      'error',
      '入力エラー',
      '必須項目の入力・選択に不備がございます'
    )
  }
}

const onChangeFormFile = (e) => {
  e.preventDefault()
  if (e.currentTarget.hasAttribute('multiple')) {
    const dataFormId = e.currentTarget.closest('form').getAttribute('form-id')
    const dataMultipleNum = e.currentTarget.getAttribute('data-multiple-num')
    const elemForm = document.querySelector('[form-id="' + dataFormId + '"]')
    // Reset
    e.currentTarget.nextElementSibling.classList.remove('is-active')
    e.currentTarget.nextElementSibling.innerHTML = ''
    if (e.currentTarget.files.length > dataMultipleNum) {
      e.currentTarget.nextElementSibling.innerHTML = objSetting.words.inputFileOver
      e.currentTarget.nextElementSibling.classList.add('is-active')
      e.currentTarget.value = ''
    }
  }
}

const onModalOpen = (e) => {
  e.preventDefault()
  const newModal = new ModalComponent(e.currentTarget.getAttribute('js-modal-open'), 'open')
}

const onModalClose = (e) => {
  e.preventDefault()
  const newModal = new ModalComponent(e.currentTarget.getAttribute('js-modal-close'), 'close')
}

const onModalSlide = (e) => {
  e.preventDefault()
  let objSlideOpt = {}
  const dataSlideGroup = e.currentTarget.getAttribute('slide-group')
  if (dataSlideGroup !== '') {
    objSlideOpt['slideGroup'] = e.currentTarget.getAttribute('slide-group')
    objSlideOpt['slideNumber'] = Array.prototype.indexOf.call(document.querySelectorAll('[slide-group="' + dataSlideGroup + '"]'), e.currentTarget)
  }
  const newmodal = new ModalComponent(e.currentTarget.getAttribute('js-modal-open'), 'slide', objSlideOpt)
}

const onSmoothLink = (e) => {
  e.preventDefault()
  moveSmoothLink(e.currentTarget.getAttribute('smooth-id'))
}

const onDrawer = (e) => {
  if (e) {e.preventDefault()}  
  const objValueHeight = getObjValue().height
  const isDrawer = document.querySelector('[js-drawer-toggle]').getAttribute('disabled')
  if (isDrawer) {
    return
  }
  document.querySelector('[js-drawer-toggle]').setAttribute('disabled', true)
  if (document.querySelector('html').classList.contains('is-drawer')) {
    const drawerTop = document.querySelector('.l-body').getAttribute('data-drawer-top')
    document.querySelector('.l-body').style.position = 'static'
    window.scrollTo(0, drawerTop)
    document.querySelector('html').classList.remove('is-drawer')
    document.querySelector('[js-drawer-toggle]').removeAttribute('disabled')
  } else {
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop
    document.querySelector('html').classList.add('is-drawer')
    if (document.defaultView.getComputedStyle(document.querySelector('[js-header]'), null).position === 'fixed') {
      document.querySelector('[js-drawer]').style.top = objValueHeight.header + 'px'
      document.querySelector('[js-drawer]').style.height = (window.innerHeight - objValueHeight.header) + 'px'
    } else {
      document.querySelector('[js-drawer]').style.top = '0'
      document.querySelector('[js-drawer]').style.height = '100vh'
    }
    setTimeout(() => {
      if (window.innerWidth > 768) {
        document.querySelector('.l-body').style.position = 'static'
      } else {
        document.querySelector('.l-body').style.position = 'fixed'
      }
      document.querySelector('.l-body').style.top = (-windowScroll) + 'px'
      document.querySelector('.l-body').setAttribute('data-drawer-top', windowScroll)
      document.querySelector('[js-drawer-toggle]').removeAttribute('disabled')
    }, 500)
  }
}

/*
const onAccordion = (e) => {
  e.preventDefault()
  const accordionTarget = e.currentTarget.getAttribute('accordion-target')
  const elemAccordion = document.querySelector('[accordion-id="' + accordionTarget + '"]')
  if (e.currentTarget.classList.contains('is-active')) {
    e.currentTarget.classList.remove('is-active')
    elemAccordion.style.maxHeight = null
  } else {
    elemAccordion.style.maxHeight = elemAccordion.scrollHeight + 'px'
    e.currentTarget.classList.add('is-active')
    elemAccordion.addEventListener('transitionend', () => {
      elemAccordion.style.maxHeight = 'none'
    })
  }
}
*/

const onAccordion = (e) => {
  e.preventDefault()
  let isAccordion= e.currentTarget.getAttribute('disabled')
  if (isAccordion) {
    return
  }
  let targetAccordionDetails = e.currentTarget.parentNode
  let targetAccordionSummary = e.currentTarget
  let targetAccordionContent = e.currentTarget.nextElementSibling
  targetAccordionSummary.setAttribute('disabled', true)
  if (targetAccordionDetails.open) {
    targetAccordionContent.style.gridTemplateRows = '0fr'
    targetAccordionContent.addEventListener(
      'transitionend',
      () => {
        targetAccordionDetails.removeAttribute('open')
        targetAccordionContent.style.gridTemplateRows = ''
        targetAccordionSummary.removeAttribute('disabled')
      },
      { once: true }
    )
  } else {
    targetAccordionContent.style.gridTemplateRows = '0fr'
    targetAccordionDetails.setAttribute('open', true)
    requestAnimationFrame(() => {
      targetAccordionContent.style.gridTemplateRows = '1fr'
    })
    targetAccordionContent.addEventListener(
      'transitionend',
      () => {
        targetAccordionSummary.removeAttribute('disabled')
      },
      { once: true }
    )
  }
}

const onSwitchTab = (e) => {
  e.preventDefault()
  const switchId = e.currentTarget.closest('[js-switch]').getAttribute('switch-id')
  const switchNum = parseInt(e.currentTarget.getAttribute('js-switch-tab'))
  switchContent(switchId, switchNum)
}

const onSwitchSelect = (e) => {
  e.preventDefault()
  const switchId = e.currentTarget.closest('[js-switch]').getAttribute('switch-id')
  const switchNum = parseInt(e.currentTarget.options[e.currentTarget.selectedIndex].value)
  switchContent(switchId, switchNum)
}

/* ========== ↓ local ↓ ========== */
const onLogout = (e) => {
  /*
  e.preventDefault()
  localStorage.removeItem('auth')
  localStorage.removeItem('historyDashboardTop')
  localStorage.removeItem('historyDashboardServiceDetail')
  localStorage.removeItem('historyDashboardMediaDetail')
  localStorage.removeItem('historyDashboardCategory')
  localStorage.removeItem('historyClientTop')
  localStorage.removeItem('historyClientMediaDetail')
  localStorage.removeItem('historyCategory')

  const newToast = new ToastComponent(
    'success',
    'ログアウト完了',
    ''
  )
  setTimeout(() => {
    window.location.href = '/'
  }, 1000)
  */
}
/* ========== ↑ local ↑ ========== */

/// Class
class HeightSetting {
  constructor () {
    this.mainMarginTop = 0
    // document.querySelector('[js-main]').style.minHeight = 'auto'
    this._updateHeight()
    this._setHeight()
  }
  _updateHeight () {
    if (document.querySelector('[js-header]')) {
      Object.assign(objValue.height, {
        header: document.querySelector('[js-header]').offsetHeight
      })
    }
    if (document.querySelector('[js-drop]')) {
      Object.assign(objValue.height, {
        nav: document.querySelector('[js-drop]').offsetHeight
      })
    }
    if (document.querySelector('[js-footer]')) {
      Object.assign(objValue.height, {
        footer: document.querySelector('[js-footer]').offsetHeight
      })
    }
    if (document.querySelector('[js-main]')) {
      Object.assign(objValue.height, {
        main: document.querySelector('[js-main]').offsetHeight
      })
    }
  }
  _setHeight () {
    const objValueHeight = getObjValue().height
    // main -> margin-top
    if (document.querySelector('[js-header]') && document.defaultView.getComputedStyle(document.querySelector('[js-header]'), null).position === 'fixed' && document.defaultView.getComputedStyle(document.querySelector('[js-header]'), null).display !== 'none') {
      this.mainMarginTop += objValueHeight.header
    }
    if (document.querySelector('[js-drop]') && document.defaultView.getComputedStyle(document.querySelector('[js-drop]'), null).position === 'fixed' && document.defaultView.getComputedStyle(document.querySelector('[js-drop]'), null).display !== 'none') {
      this.mainMarginTop += objValueHeight.nav
      document.querySelector('[js-drop]').style.top = objValueHeight.header + 'px'
    }
    document.querySelector('[js-main]').style.marginTop = this.mainMarginTop + 'px'
    // main -> min-height
    document.querySelector('[js-main]').style.minHeight = (window.innerHeight - objValueHeight.header - objValueHeight.nav - objValueHeight.footer) + 'px'
    /*
    if (window.innerHeight > (objValueHeight.header + objValueHeight.nav + objValueHeight.main + objValueHeight.footer)) {
      document.querySelector('[js-main]').style.minHeight = (window.innerHeight - objValueHeight.header - objValueHeight.nav - objValueHeight.footer) + 'px'
    }
    */
  }
}

class FormComponent {
  constructor (id, value, opt) {
    this.id = id
    this.value = value
    this.opt = opt
    this.elemForm = document.querySelector('[form-id="' + this.id + '"]')
    this.apiUrl = objSetting['api'][`${this.id}`]['url']
    if (this.id === 'inquiryEdit') {
      this.apiUrl = this.apiUrl + value.get('uuid') + '/'
    }
    this.apiMethod = objSetting['api'][`${this.id}`]['method']
    this.apiType = objSetting['api'][`${this.id}`]['type']
    this.apiAuthor = objSetting['api'][`${this.id}`]['author']
    this._requestForm()
  }
  _requestForm () {
    requestFetch(
      this.apiUrl,
      getFetchInit(this.apiMethod, this.apiType, this.apiAuthor, this.value)
    )
      .then(response => response.json())
      .then(data => {
        this._successForm(data)
      })
      .catch(error => {
        this._errorForm(error)
      })
  }
  _successForm (data) {
    console.log(data)
    if (data.status) {
      if (objSetting['api'][`${this.id}`]['toast']) {
        const newToast = new ToastComponent(
          'success',
          objSetting['api'][`${this.id}`]['successTitle'],
          objSetting['api'][`${this.id}`]['successMessage']
        )
      } else {
        this.elemForm.querySelector('[form-result]').setAttribute('form-result', 'success')
        this.elemForm.querySelector('[form-result]').innerHTML += '<p>' + objSetting['api'][`${this.id}`]['successTitle'] + '</p>'
        this.elemForm.querySelector('[form-result]').innerHTML += '<p>' + objSetting['api'][`${this.id}`]['successMessage'] + '</p>'
        this.elemForm.querySelector('[form-result]').classList.add('is-active')
      }
      /* ========== ↓ local ↓ ========== */
      // login
      if (this.id === 'login') {
        this.elemForm.reset()
        // Set Storage
        var date = new Date()
        var dateYYMMDD = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +('0' + date.getDate()).slice(-2)
        const objStorageAuth = {
          userType: data.flag,
          isLoggedIn: data.status,
          token: data.token,
          loggedInDate: dateYYMMDD
        }
        localStorage.setItem('auth', JSON.stringify(objStorageAuth))
        if (data.flag === 'client') {
          // Transition
          setTimeout(() => {
            window.location.href = '/client/'
          }, 0)
        } else {
          // Transition
          setTimeout(() => {
            window.location.href = '/dashboard/'
          }, 0)
        }
      }
      // demoLogin
      else if (this.id === 'demoLogin') {
        this.elemForm.reset()
        // Set Storage
        var date = new Date()
        var dateYYMMDD = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +('0' + date.getDate()).slice(-2)
        const objStorageAuth = {
          isLoggedIn: data.status,
          mode: data.mode,
          demoId: data.demo_id,
          loggedInDate: dateYYMMDD
        }
        localStorage.setItem('auth', JSON.stringify(objStorageAuth))
        // Transition
        setTimeout(() => {
          window.location.href = '/dashboard/'
        }, 0)
      }
      // inquiryRegist
      else if (this.id === 'inquiryRegist') {
        // Transition
        setTimeout(() => {
          window.location.href = '/dashboard/setting/inquiry/'
        }, 1000)
      }
      // inquiryEdit
      else if (this.id === 'inquiryEdit') {
        // Transition
        setTimeout(() => {
          window.location.href = '/dashboard/setting/inquiry/'
        }, 1000)
      }
      else {
        this.elemForm.reset()
      }
      /* ========== ↑ local ↑ ========== */
    } else {
      if (objSetting['api'][`${this.id}`]['toast']) {
        const newToast = new ToastComponent(
          'error',
          objSetting['api'][`${this.id}`]['errorTitle'],
          objSetting['api'][`${this.id}`]['errorMessage']
        )
      } else {
        this.elemForm.querySelector('[form-result]').setAttribute('form-result', 'error')
        this.elemForm.querySelector('[form-result]').innerHTML += '<p>' + objSetting['api'][`${this.id}`]['errorTitle'] + '</p>'
        this.elemForm.querySelector('[form-result]').innerHTML += '<p>' + objSetting['api'][`${this.id}`]['errorMessage'] + '</p>'
        this.elemForm.querySelector('[form-result]').classList.add('is-active')
      }
    }
    this._completeForm(data)
  }
  _errorForm (error) {
    console.log(error)
    if (objSetting['api'][`${this.id}`]['toast']) {
      // login
      if (this.id === 'login') {
        const newToast = new ToastComponent(
          'error',
          objSetting['api'][`${this.id}`]['errorTitle'],
          objSetting['api'][`${this.id}`]['errorMessage']
        )
      } else {
        const newToast = new ToastComponent(
          'error',
          objSetting.words.errorTitle,
          objSetting.words.errorMessage
        )
      }
    } else {
      this.elemForm.querySelector('[form-result]').setAttribute('form-result', 'error')
      this.elemForm.querySelector('[form-result]').innerHTML += '<p>' + objSetting.words.errorTitle + '</p>'
      this.elemForm.querySelector('[form-result]').innerHTML += '<p>' + objSetting.words.errorMessage + '</p>'
      this.elemForm.querySelector('[form-result]').classList.add('is-active')
    }
    this._completeForm()
  }
  _completeForm (data) {
    this.elemForm.querySelector('[form-submit]').textContent = this.elemForm.querySelector('[form-submit]').getAttribute('form-submit-text')
    this.elemForm.querySelector('[form-submit]').removeAttribute('form-submit-text')
    this.elemForm.querySelector('[form-submit]').removeAttribute('disabled')
    /* ========== ↓ local ↓ ========== */
    /*
    if (this.id === 'searchService') {
      setTimeout(() => {
        const modal = new ModalComponent('modalSelectCarrier', 'open', { required: true })
      }, 500)
    }
    */
    /* ========== ↑ local ↑ ========== */
  }
}

class ModalComponent {
  constructor (id, mode, opt = {}) {
    this.id = id
    this.mode = mode
    this.opt = opt
    if (this.mode === 'open') { this._openModal() }
    if (this.mode === 'close') { this._closeModal() }
    if (this.mode === 'slide') { this._slideModal() }
  }
  _openModal () {
    document.querySelectorAll('[js-modal]').forEach((modalCont) => {
      modalCont.setAttribute('modal-open', false)
    })
    document.querySelector('[modal-id="' + this.id + '"]').setAttribute('modal-open', true)
  }
  _closeModal () {
    document.querySelector('[modal-id="' + this.id + '"]').setAttribute('modal-open', false)
  }
  _slideModal () {
    let htmlResult = ''
    let htmlSlideContent = ''
    const extensionImage = ['jpg', 'jpeg', 'png', 'gif']
    const extensionMovie = ['mp4', 'mov']
    this.slideGroup = this.opt.slideGroup
    this.slideNumber = this.opt.slideNumber
    // Reset
    document.querySelector('[modal-slide-cont]').innerHTML = ''
    // html - SlideContent
    document.querySelectorAll('[slide-group="' + this.slideGroup + '"]').forEach((elem) => {
      const slideContent = elem.getAttribute('slide-content')
      htmlSlideContent += '<div class="swiper-slide">'
      // Youtube / Vimeo
      if (slideContent.includes('youtube') || slideContent.includes('vimeo')) {
        htmlSlideContent += '<div class="c-movie">' +
                            '  <iframe src="' + slideContent + '" class="u-w100p" frameborder="0" allowfullscreen></iframe>' +
                            '</div>'
      } else {
        const extension = slideContent.split('.').pop()
        // Image
        if (extensionImage.includes(extension)) {
          htmlSlideContent += '<figure class="p-slide-photo"><img src="' + slideContent + '"></figure>'
        }
        // Movie
        if (extensionMovie.includes(extension)) {
          htmlSlideContent += '<div class="c-movie">' +
                              '  <video src="' + slideContent + '" controls></video>' +
                              '</div>'
        }
      }
      htmlSlideContent += '</div>'
    })
    // html - Result
    htmlResult += '<div class="swiper-container" id="modalSlideCont">' +
                  '  <div class="swiper-wrapper">' +
                  '    ' + htmlSlideContent +
                  '  </div>' +
                  '  <div class="swiper-button-prev"></div>' +
                  '  <div class="swiper-button-next"></div>' +
                  '</div>'
    document.querySelector('[modal-slide-cont]').innerHTML = htmlResult
    // swiper
    const swiper = new Swiper('#modalSlideCont', {
      initialSlide: this.slideNumber,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })
    this._openModal()
  }
}

class ToastComponent {
  constructor (mode, title, message) {
    this.mode = mode
    this.title = title
    this.message = message
    this._openToast()
  }
  _openToast () {
    if (document.querySelector('[js-toast]').getAttribute('toast-open') === 'true') {
      return
    }
    document.querySelector('[js-toast]').setAttribute('toast-open', true)
    document.querySelector('[js-toast]').setAttribute('toast-mode', this.mode)
    document.querySelector('[js-toast-title]').innerHTML = this.title
    document.querySelector('[js-toast-message]').innerHTML = this.message
    setTimeout(() => {
      document.querySelector('[js-toast]').setAttribute('toast-open', false)
    }, 4000)
  }
}

class SlideshowComponent {
  constructor (id, opt = {}) {
    let objSlideshow = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    }
    this.id = id
    this.opt = Object.assign(objSlideshow, opt)
    this._createSlideshow()
  }
  _createSlideshow () {
    const newSwiper = new Swiper('[slideshow-id="' + this.id + '"]', this.opt)
  }
}

class EventSetting {
  constructor (objAddEvent = {}) {
    this.objEvent = {
      SubmitForm: {
        trigger: '[js-form-submit]',
        event: 'click',
        method: onSubmitForm
      },
      ChangeFormFile: {
        trigger: '[type="file"]',
        event: 'change',
        method: onChangeFormFile
      },
      ModalOpen: {
        trigger: '[js-modal-open]',
        event: 'click',
        method: onModalOpen
      },
      ModalClose: {
        trigger: '[js-modal-close]',
        event: 'click',
        method: onModalClose
      },
      ModalSlide: {
        trigger: '[js-modal-slide]',
        event: 'click',
        method: onModalSlide
      },
      SmoothLink: {
        trigger: '[js-smooth-link]',
        event: 'click',
        method: onSmoothLink
      },
      Drawer: {
        trigger: '[js-drawer-toggle]',
        event: 'click',
        method: onDrawer
      },
      Accordion: {
        trigger: '[js-accordion-toggle]',
        event: 'click',
        method: onAccordion
      },
      SwitchTab: {
        trigger: '[js-switch-tab]',
        event: 'click',
        method: onSwitchTab
      },
      SwitchSelect: {
        trigger: '[js-switch-select]',
        event: 'change',
        method: onSwitchSelect
      },
      /* ========== ↓ local ↓ ========== */
      Logout: {
        trigger: '[js-logout]',
        event: 'click',
        method: onLogout
      },
      /* ========== ↑ local ↑ ========== */
    }
    Object.assign(this.objEvent, objAddEvent)
  }
  _addEvent (targetEvent = []) {
    Object.keys(this.objEvent).forEach((key) => {
      if (this.objEvent[key]['trigger'].length > 0) {
        if (targetEvent.length === 0 || targetEvent.includes(key)) {
          if (document.querySelector(this.objEvent[key]['trigger'])) {
            document.querySelectorAll(this.objEvent[key]['trigger']).forEach((target) => {
              target.addEventListener(this.objEvent[key]['event'], this.objEvent[key]['method'])
            })
          }
        }
      } else {
        document.addEventListener(this.objEvent[key]['event'], this.objEvent[key]['method'])
      }
    })
  }
  _removeEvent (targetEvent = []) {
    Object.keys(this.objEvent).forEach((key) => {
      if (this.objEvent[key]['trigger'].length > 0) {
        if (targetEvent.length === 0 || targetEvent.includes(key)) {
          if (document.querySelector(this.objEvent[key]['trigger'])) {
            document.querySelectorAll(this.objEvent[key]['trigger']).forEach((target) => {
              target.removeEventListener(this.objEvent[key]['event'], this.objEvent[key]['method'])
            })
          }
        }
      } else {
        document.removeEventListener(this.objEvent[key]['event'], this.objEvent[key]['method'])
      }
    })
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      objSetting: objSetting,
      objValue: objValue,
      getObjValue: getObjValue,
      setUrlParameter: setUrlParameter,
      requestFetch: requestFetch,
      getUserAgent: getUserAgent,
      getDisplayMode: getDisplayMode,
      getFetchInit: getFetchInit,
      actionIndexedDB: actionIndexedDB,
      deleteIndexedDB: deleteIndexedDB,
      moveSmoothLink: moveSmoothLink,
      switchContent: switchContent,
      removeSkeleton: removeSkeleton,
      onResize: onResize,
      onScroll: onScroll,
      onMounted: onMounted,
      onLoad: onLoad,
      onSubmitForm: onSubmitForm,
      onChangeFormFile: onChangeFormFile,
      onModalOpen: onModalOpen,
      onModalClose: onModalClose,
      onModalSlide: onModalSlide,
      onSmoothLink: onSmoothLink,
      onDrawer: onDrawer,
      onLogout: onLogout,
      HeightSetting: HeightSetting,
      FormComponent: FormComponent,
      ModalComponent: ModalComponent,
      ToastComponent: ToastComponent,
      SlideshowComponent: SlideshowComponent,
      EventSetting: EventSetting
    }
  }
})
