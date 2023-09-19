import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabUpdate, isActive} = props
  const {displayText, tabId} = tabDetails

  const clickTab = () => {
    onClickTabUpdate(tabId)
  }

  const tabHighlight = isActive === true ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${tabHighlight}`}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
