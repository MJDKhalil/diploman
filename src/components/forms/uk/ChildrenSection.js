import React from 'react';
import { useTranslation } from 'next-i18next';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styles from '../../../styles/ApplicationForm.module.css';

function ChildrenSection({
    formData,
    onChange,
    showChildSectionNumbered,
    setShowChildSectionNumbered,
    showChild1Section,
    setShowChild1Section,
    showChild2Section,
    setShowChild2Section,
    showChild3Section,
    setShowChild3Section,
    showChild4Section,
    setShowChild4Section,
    showChild5Section,
    setShowChild5Section,
    showChild6Section,
    setShowChild6Section,
    showChild7Section,
    setShowChild7Section,
    showChild1PassportDetails,
    setShowChild1PassportDetails,
    showChild2PassportDetails,
    setShowChild2PassportDetails,
    showChild3PassportDetails,
    setShowChild3PassportDetails,
    showChild4PassportDetails,
    setShowChild4PassportDetails,
    showChild5PassportDetails,
    setShowChild5PassportDetails,
    showChild6PassportDetails,
    setShowChild6PassportDetails,
    showChild7PassportDetails,
    setShowChild7PassportDetails,
}) {
    const { t } = useTranslation();
    const {
        have_children,
        number_of_children,
        child1_first_name, child1_last_name, child1_dob, child1_nationality, child1_live_with_you, child1_travelling_with_you, child1_address,
        child2_first_name, child2_last_name, child2_dob, child2_nationality, child2_live_with_you, child2_travelling_with_you, child2_address,
        child3_first_name, child3_last_name, child3_dob, child3_nationality, child3_live_with_you, child3_travelling_with_you, child3_address,
        child4_first_name, child4_last_name, child4_dob, child4_nationality, child4_live_with_you, child4_travelling_with_you, child4_address,
        child5_first_name, child5_last_name, child5_dob, child5_nationality, child5_live_with_you, child5_travelling_with_you, child5_address,
        child6_first_name, child6_last_name, child6_dob, child6_nationality, child6_live_with_you, child6_travelling_with_you, child6_address,
        child7_first_name, child7_last_name, child7_dob, child7_nationality, child7_live_with_you, child7_travelling_with_you, child7_address,
    } = formData;

    return (
        <>
            <hr className={styles.appform__hr}/>

            <div className={styles.input_grp}>
                <p className={styles.ukForm__section__question}>{t('Form_childrenQ')}</p>
                <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li className={styles.appform__il}>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='have_children'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={have_children === 'Yes'}
                                    onClick={()=> setShowChildSectionNumbered(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='have_children'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={have_children === 'No'}
                                    onClick={()=> setShowChildSectionNumbered(false)}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showChildSectionNumbered?
                <>
                <hr className={styles.appform__hr}/>
                    <p className={styles.ukForm__section__question}>{t('Form_childrenNo')}</p>
                    <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                            <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                                <ul className={styles.appform__ul}>
                                    <li className={styles.appform__il}>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_children'
                                                value='1'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_children === '1'}
                                                onClick={()=> {
                                                    setShowChild1Section(true)
                                                    setShowChild2Section(false)
                                                    setShowChild3Section(false)
                                                    setShowChild4Section(false)
                                                    setShowChild5Section(false)
                                                    setShowChild6Section(false)
                                                    setShowChild7Section(false)
                                                }}
                                            />
                                            <span>1</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_children'
                                                value='2'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                onClick={()=> {
                                                    setShowChild1Section(true)
                                                    setShowChild2Section(true)
                                                    setShowChild3Section(false)
                                                    setShowChild4Section(false)
                                                    setShowChild5Section(false)
                                                    setShowChild6Section(false)
                                                    setShowChild7Section(false)
                                                }}
                                                checked={number_of_children === '2'}
                                            />
                                            <span>2</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_children'
                                                value='3'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_children === '3'}
                                                onClick={()=> {
                                                    setShowChild1Section(true)
                                                    setShowChild2Section(true)
                                                    setShowChild3Section(true)
                                                    setShowChild4Section(false)
                                                    setShowChild5Section(false)
                                                    setShowChild6Section(false)
                                                    setShowChild7Section(false)
                                                }}
                                            />
                                            <span>3</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_children'
                                                value='4'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_children === '4'}
                                                onClick={()=> {
                                                    setShowChild1Section(true)
                                                    setShowChild2Section(true)
                                                    setShowChild3Section(true)
                                                    setShowChild4Section(true)
                                                    setShowChild5Section(false)
                                                    setShowChild6Section(false)
                                                    setShowChild7Section(false)
                                                }}
                                            />
                                            <span>4</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_children'
                                                value='5'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_children === '5'}
                                                onClick={()=> {
                                                    setShowChild1Section(true)
                                                    setShowChild2Section(true)
                                                    setShowChild3Section(true)
                                                    setShowChild4Section(true)
                                                    setShowChild5Section(true)
                                                    setShowChild6Section(false)
                                                    setShowChild7Section(false)
                                                }}
                                            />
                                            <span>5</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_children'
                                                value='6'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_children === '6'}
                                                onClick={()=> {
                                                    setShowChild1Section(true)
                                                    setShowChild2Section(true)
                                                    setShowChild3Section(true)
                                                    setShowChild4Section(true)
                                                    setShowChild5Section(true)
                                                    setShowChild6Section(true)
                                                    setShowChild7Section(false)
                                                }}
                                            />
                                            <span>6</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_children'
                                                value='7'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_children === '7'}
                                                onClick={()=> {
                                                    setShowChild1Section(true)
                                                    setShowChild2Section(true)
                                                    setShowChild3Section(true)
                                                    setShowChild4Section(true)
                                                    setShowChild5Section(true)
                                                    setShowChild6Section(true)
                                                    setShowChild7Section(true)
                                                }}
                                            />
                                            <span>7</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {showChild1Section?
                            <>
                                <hr className={styles.appform__hr}/>
                                <p className={styles.passport__section__title}>{t('Form_childPassport')}</p>
                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <p className={styles.ukForm__text}>{t('Form_passport_info')}</p>
                                        <IconButton onClick={()=> setShowChild1PassportDetails(true)}>
                                            <ExpandMoreIcon className={styles.expand__bt}/>
                                        </IconButton>
                                        <IconButton onClick={()=> setShowChild1PassportDetails(false)}>
                                            <ExpandLessIcon className={styles.expand__less__bt}/>
                                        </IconButton>
                                    </div>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']+' '+styles['import__passport']}>
                                        <label className={styles.ukForm__form__label} htmlFor='spouse_passport_photo'>{t('Form_passport_import')}</label>
                                            <input
                                            className={styles['ukForm__input__for__two']+' '+styles['import__passport']}
                                            name='child1_passport_photo'
                                            type='file'
                                            accept='image/*,.pdf'
                                            placeholder='Import Passport'
                                            onChange={(e) => onChange({ target: { name: e.target.name, value: e.target.files[0] } })}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childAddress')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child1_live_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child1_live_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child1_live_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child1_live_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childTravel')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child1_travelling_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child1_travelling_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child1_travelling_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child1_travelling_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {showChild1PassportDetails?
                                 <>
                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child1_first_name'>{t('Form_childFirstName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child1_first_name'
                                                value={child1_first_name}
                                                placeholder={t('Form_firstName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child1_last_name'>{t('Form_childlastName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child1_last_name'
                                                value={child1_last_name}
                                                placeholder={t('Form_lastName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child1_dob'>{t('Form_childDob')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='date'
                                                name='child1_dob'
                                                value={child1_dob}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child1_nationality'>{t('Form_childNationality')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child1_nationality'
                                                value={child1_nationality}
                                                placeholder={t('Form_childNationalityEx')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child1_address'>{t('Form_address')}</label>
                                        <input
                                            className={styles.input__for__one}
                                            name='child1_address'
                                            type='text'
                                            placeholder={t('Form_childAddressEx')}
                                            onChange={e => onChange(e)}
                                            value={child1_address}
                                        />
                                    </div>
                                </>
                            :null}
                         </>
                        :null}

                        {showChild2Section?
                            <>
                                <hr className={styles.appform__hr}/>
                                <p className={styles.passport__section__title}>{t('Form_childPassport')}</p>
                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <p className={styles.ukForm__text}>{t('Form_passport_info')}</p>
                                        <IconButton onClick={()=> setShowChild2PassportDetails(true)}>
                                            <ExpandMoreIcon className={styles.expand__bt}/>
                                        </IconButton>
                                        <IconButton onClick={()=> setShowChild2PassportDetails(false)}>
                                            <ExpandLessIcon className={styles.expand__less__bt}/>
                                        </IconButton>
                                    </div>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']+' '+styles['import__passport']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child2_passport_photo'>{t('Form_passport_import')}</label>
                                            <input
                                            className={styles['ukForm__input__for__two']+' '+styles['import__passport']}
                                            name='child2_passport_photo'
                                            type='file'
                                            accept='image/*,.pdf'
                                            placeholder='Import Passport'
                                            onChange={(e) => onChange({ target: { name: e.target.name, value: e.target.files[0] } })}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childAddress')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child2_live_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child2_live_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child2_live_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child2_live_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childTravel')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child2_travelling_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child2_travelling_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child2_travelling_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child2_travelling_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {showChild2PassportDetails?
                                 <>
                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child2_first_name'>{t('Form_childFirstName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child2_first_name'
                                                value={child2_first_name}
                                                placeholder={t('Form_firstName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child2_last_name'>{t('Form_childlastName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child2_last_name'
                                                value={child2_last_name}
                                                placeholder={t('Form_lastName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child2_dob'>{t('Form_childDob')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='date'
                                                name='child2_dob'
                                                value={child2_dob}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child2_nationality'>{t('Form_childNationality')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child2_nationality'
                                                value={child2_nationality}
                                                placeholder={t('Form_childNationalityEx')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child2_address'>{t('Form_address')}</label>
                                        <input
                                            className={styles.input__for__one}
                                            name='child2_address'
                                            type='text'
                                            placeholder={t('Form_childAddressEx')}
                                            onChange={e => onChange(e)}
                                            value={child2_address}
                                        />
                                    </div>
                                </>
                            :null}
                         </>
                        :null}

                        {showChild3Section?
                            <>
                                <hr className={styles.appform__hr}/>
                                <p className={styles.passport__section__title}>{t('Form_childPassport')}</p>
                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <p className={styles.ukForm__text}>{t('Form_passport_info')}</p>
                                        <IconButton onClick={()=> setShowChild3PassportDetails(true)}>
                                            <ExpandMoreIcon className={styles.expand__bt}/>
                                        </IconButton>
                                        <IconButton onClick={()=> setShowChild3PassportDetails(false)}>
                                            <ExpandLessIcon className={styles.expand__less__bt}/>
                                        </IconButton>
                                    </div>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']+' '+styles['import__passport']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child3_passport_photo'>{t('Form_passport_import')}</label>
                                            <input
                                            className={styles['ukForm__input__for__two']+' '+styles['import__passport']}
                                            name='child3_passport_photo'
                                            type='file'
                                            accept='image/*,.pdf'
                                            placeholder='Import Passport'
                                            onChange={(e) => onChange({ target: { name: e.target.name, value: e.target.files[0] } })}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childAddress')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child3_live_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child3_live_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child3_live_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child3_live_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childTravel')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child3_travelling_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child3_travelling_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child3_travelling_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child2_travelling_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {showChild3PassportDetails?
                                 <>
                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child3_first_name'>{t('Form_childFirstName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child3_first_name'
                                                value={child3_first_name}
                                                placeholder={t('Form_firstName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child3_last_name'>{t('Form_childlastName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child3_last_name'
                                                value={child3_last_name}
                                                placeholder={t('Form_lastName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child3_dob'>{t('Form_childDob')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='date'
                                                name='child3_dob'
                                                value={child3_dob}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child3_nationality'>{t('Form_childNationality')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child3_nationality'
                                                value={child3_nationality}
                                                placeholder={t('Form_childNationalityEx')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child3_address'>{t('Form_address')}</label>
                                        <input
                                            className={styles.input__for__one}
                                            name='child3_address'
                                            type='text'
                                            placeholder={t('Form_childAddressEx')}
                                            onChange={e => onChange(e)}
                                            value={child3_address}
                                        />
                                    </div>
                                </>
                            :null}
                         </>
                        :null}

                        {showChild4Section?
                            <>
                                <hr className={styles.appform__hr}/>
                                <p className={styles.passport__section__title}>{t('Form_childPassport')}</p>
                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <p className={styles.ukForm__text}>{t('Form_passport_info')}</p>
                                        <IconButton onClick={()=> setShowChild4PassportDetails(true)}>
                                            <ExpandMoreIcon className={styles.expand__bt}/>
                                        </IconButton>
                                        <IconButton onClick={()=> setShowChild4PassportDetails(false)}>
                                            <ExpandLessIcon className={styles.expand__less__bt}/>
                                        </IconButton>
                                    </div>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']+' '+styles['import__passport']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child4_passport_photo'>{t('Form_passport_import')}</label>
                                            <input
                                            className={styles['ukForm__input__for__two']+' '+styles['import__passport']}
                                            name='child4_passport_photo'
                                            type='file'
                                            accept='image/*,.pdf'
                                            placeholder='Import Passport'
                                            onChange={(e) => onChange({ target: { name: e.target.name, value: e.target.files[0] } })}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childAddress')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child4_live_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child4_live_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child4_live_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child4_live_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childTravel')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child4_travelling_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child4_travelling_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child4_travelling_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child4_travelling_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {showChild4PassportDetails?
                                 <>
                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child4_first_name'>{t('Form_childFirstName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child4_first_name'
                                                value={child4_first_name}
                                                placeholder={t('Form_firstName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child4_last_name'>{t('Form_childlastName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child4_last_name'
                                                value={child4_last_name}
                                                placeholder={t('Form_lastName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child4_dob'>{t('Form_childDob')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='date'
                                                name='child4_dob'
                                                value={child4_dob}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child4_nationality'>{t('Form_childNationality')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child4_nationality'
                                                value={child4_nationality}
                                                placeholder={t('Form_childNationalityEx')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child4_address'>{t('Form_address')}</label>
                                        <input
                                            className={styles.input__for__one}
                                            name='child4_address'
                                            type='text'
                                            placeholder={t('Form_childAddressEx')}
                                            onChange={e => onChange(e)}
                                            value={child4_address}
                                        />
                                    </div>
                                </>
                            :null}
                         </>
                        :null}

                        {showChild5Section?
                            <>
                                <hr className={styles.appform__hr}/>
                                <p className={styles.passport__section__title}>{t('Form_childPassport')}</p>
                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <p className={styles.ukForm__text}>{t('Form_passport_info')}</p>
                                        <IconButton onClick={()=> setShowChild5PassportDetails(true)}>
                                            <ExpandMoreIcon className={styles.expand__bt}/>
                                        </IconButton>
                                        <IconButton onClick={()=> setShowChild5PassportDetails(false)}>
                                            <ExpandLessIcon className={styles.expand__less__bt}/>
                                        </IconButton>
                                    </div>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']+' '+styles['import__passport']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child5_passport_photo'>{t('Form_passport_import')}</label>
                                            <input
                                            className={styles['ukForm__input__for__two']+' '+styles['import__passport']}
                                            name='child5_passport_photo'
                                            type='file'
                                            accept='image/*,.pdf'
                                            placeholder='Import Passport'
                                            onChange={(e) => onChange({ target: { name: e.target.name, value: e.target.files[0] } })}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childAddress')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child5_live_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child5_live_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child5_live_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child5_live_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childTravel')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child5_travelling_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child5_travelling_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child5_travelling_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child5_travelling_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {showChild5PassportDetails?
                                 <>
                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child5_first_name'>{t('Form_childFirstName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child5_first_name'
                                                value={child5_first_name}
                                                placeholder={t('Form_firstName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child5_last_name'>{t('Form_childlastName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child5_last_name'
                                                value={child5_last_name}
                                                placeholder={t('Form_lastName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child5_dob'>{t('Form_childDob')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='date'
                                                name='child5_dob'
                                                value={child5_dob}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child5_nationality'>{t('Form_childNationality')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child5_nationality'
                                                value={child5_nationality}
                                                placeholder={t('Form_childNationalityEx')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child5_address'>{t('Form_address')}</label>
                                        <input
                                            className={styles.input__for__one}
                                            name='child5_address'
                                            type='text'
                                            placeholder={t('Form_childAddressEx')}
                                            onChange={e => onChange(e)}
                                            value={child5_address}
                                        />
                                    </div>
                                </>
                            :null}
                         </>
                        :null}

                        {showChild6Section?
                            <>
                                <hr className={styles.appform__hr}/>
                                <p className={styles.passport__section__title}>{t('Form_childPassport')}</p>
                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <p className={styles.ukForm__text}>{t('Form_passport_info')}</p>
                                        <IconButton onClick={()=> setShowChild6PassportDetails(true)}>
                                            <ExpandMoreIcon className={styles.expand__bt}/>
                                        </IconButton>
                                        <IconButton onClick={()=> setShowChild6PassportDetails(false)}>
                                            <ExpandLessIcon className={styles.expand__less__bt}/>
                                        </IconButton>
                                    </div>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']+' '+styles['import__passport']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child6_passport_photo'>{t('Form_passport_import')}</label>
                                            <input
                                            className={styles['ukForm__input__for__two']+' '+styles['import__passport']}
                                            name='child6_passport_photo'
                                            type='file'
                                            accept='image/*,.pdf'
                                            placeholder='Import Passport'
                                            onChange={(e) => onChange({ target: { name: e.target.name, value: e.target.files[0] } })}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childAddress')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child6_live_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child6_live_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child6_live_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child6_live_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childTravel')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child6_travelling_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child6_travelling_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child6_travelling_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child6_travelling_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {showChild6PassportDetails?
                                 <>
                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child6_first_name'>{t('Form_childTravel')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child6_first_name'
                                                value={child6_first_name}
                                                placeholder={t('Form_firstName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child6_last_name'>{t('Form_childlastName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child6_last_name'
                                                value={child6_last_name}
                                                placeholder={t('Form_lastName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child6_dob'>{t('Form_childDob')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='date'
                                                name='child6_dob'
                                                value={child6_dob}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child6_nationality'>{t('Form_childNationality')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child6_nationality'
                                                value={child6_nationality}
                                                placeholder={t('Form_childNationalityEx')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child6_address'>{t('Form_address')}</label>
                                        <input
                                            className={styles.input__for__one}
                                            name='child6_address'
                                            type='text'
                                            placeholder={t('Form_childAddressEx')}
                                            onChange={e => onChange(e)}
                                            value={child6_address}
                                        />
                                    </div>
                                </>
                            :null}
                         </>
                        :null}

                        {showChild7Section?
                            <>
                                <hr className={styles.appform__hr}/>
                                <p className={styles.passport__section__title}>{t('Form_childPassport')}</p>
                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <p className={styles.ukForm__text}>{t('Form_passport_info')}</p>
                                        <IconButton onClick={()=> setShowChild7PassportDetails(true)}>
                                            <ExpandMoreIcon className={styles.expand__bt}/>
                                        </IconButton>
                                        <IconButton onClick={()=> setShowChild7PassportDetails(false)}>
                                            <ExpandLessIcon className={styles.expand__less__bt}/>
                                        </IconButton>
                                    </div>
                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']+' '+styles['import__passport']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child7_passport_photo'>{t('Form_passport_import')}</label>
                                            <input
                                            className={styles['ukForm__input__for__two']+' '+styles['import__passport']}
                                            name='child7_passport_photo'
                                            type='file'
                                            accept='image/*,.pdf'
                                            placeholder='Import Passport'
                                            onChange={(e) => onChange({ target: { name: e.target.name, value: e.target.files[0] } })}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childAddress')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child7_live_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child7_live_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child7_live_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child7_live_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['spouse__trip__bt']}>
                                        <p className={styles.radion__title}>{t('Form_childTravel')}</p>
                                        <ul className={styles.appform__ul}>
                                            <li className={styles.appform__il}>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child7_travelling_with_you'
                                                        value='Yes'
                                                        className={styles.input_radio}
                                                        checked={child7_travelling_with_you === 'Yes'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className={styles.radio_wrap}>
                                                    <input
                                                        type='radio'
                                                        name='child7_travelling_with_you'
                                                        value='No'
                                                        className={styles.input_radio}
                                                        checked={child7_travelling_with_you === 'No'}
                                                        onChange={e => onChange(e)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {showChild7PassportDetails?
                                 <>
                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child7_first_name'>{t('Form_childFirstName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child7_first_name'
                                                value={child7_first_name}
                                                placeholder={t('Form_firstName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child7_last_name'>{t('Form_childlastName')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child7_last_name'
                                                value={child7_last_name}
                                                placeholder={t('Form_lastName')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.input_grp}>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child7_dob'>{t('Form_childDob')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='date'
                                                name='child7_dob'
                                                value={child7_dob}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className={styles.input_wrap}>
                                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='child7_nationality'>{t('Form_childNationality')}</label>
                                            <input
                                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                                type='text'
                                                name='child7_nationality'
                                                value={child7_nationality}
                                                placeholder={t('Form_childNationalityEx')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles['input_wrap']+' '+styles['input_wrap__bt']}>
                                        <label className={styles.ukForm__form__label} htmlFor='child7_address'>{t('Form_address')}</label>
                                        <input
                                            className={styles.input__for__one}
                                            name='child7_address'
                                            type='text'
                                            placeholder={t('Form_childAddressEx')}
                                            onChange={e => onChange(e)}
                                            value={child7_address}
                                        />
                                    </div>
                                </>
                            :null}
                         </>
                        :null}

                </>
            :null}
        </>
    );
}

export default ChildrenSection;
