import React from 'react';
import './SchoolCard.css';
import { useTranslation } from "react-i18next";
import AddTaskIcon from '@mui/icons-material/AddTask';
import CheckIcon from '@mui/icons-material/Check';
import Carousel from 'react-elastic-carousel';

const schoolBreakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 550, itemsToShow: 2 },
    {width: 768, itemsToShow: 3 },
    {width: 1200, itemsToShow: 4 },
];

function SchoolCard() {

    const { t } = useTranslation();

  return (
    <div id='schoolCards' className='schoolCards'>
        <h2 className='schoolCard__subheading'>{t('schoolCard_title')}</h2>
        <Carousel className='schoolCards__carousel' breakPoints={schoolBreakPoints}>
            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='' src="https://stay.fl-france.com/wp-content/uploads/2021/02/france-langue-logo.svg" alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('flCard_title')}</h3>
                    <p className='school__country'>{t('flCard_Mainlocation')}</p>
                    <p className='school__course'>{t('flCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('flCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('flCard_li2')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('flCard_li3')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('flCard_li4')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='schoolCard__image1' src="https://www.wlep.co.uk/wp-content/uploads/warwickshire-college-group-logo.png" alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('wcgCard_title')}</h3>
                    <p className='school__country'>{t('wcgCard_Mainlocation')}</p>
                    <p className='school__course'>{t('wcgCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                      <li><CheckIcon className='schoolCard__icon' /> {t('wcgCard_li1')}</li>
                      <li><AddTaskIcon className='schoolCard__icon' /> {t('wcgCard_li2')}</li>
                      <li><AddTaskIcon className='schoolCard__icon' /> {t('wcgCard_li3')}</li>
                      <li><AddTaskIcon className='schoolCard__icon' /> {t('wcgCard_li4')}</li>
                      <li><CheckIcon className='schoolCard__icon' /> {t('wcgCard_li5')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='schoolCard__image1' src="https://storage.builderall.com//franquias/2/673516/editor-html/6949095.png" alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('elecCard_title')}</h3>
                    <p className='school__country'>{t('elecCard_Mainlocation')}</p>
                    <p className='school__course'>{t('elecCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('elecCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('elecCard_li2')}</li>
                        <li><CheckIcon className='schoolCard__icon' /> {t('elecCard_li3')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='' src="https://pbs.twimg.com/profile_images/1292728811906244609/Jn6LqfMp_400x400.jpg" alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('californiCard_title')}</h3>
                    <p className='school__country'>{t('californiCard_Mainlocation')}</p>
                    <p className='school__course'>{t('californiCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('californiCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('californiCard_li2')}</li>
                        <li><CheckIcon className='schoolCard__icon' /> {t('californiCard_li3')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='school__display__image' src="data:image/png;base64,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" alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('aceCard_title')}</h3>
                    <p className='school__country'>{t('aceCard_Mainlocation')}</p>
                    <p className='school__course'>{t('aceCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('aceCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('aceCard_li2')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('aceCard_li3')}</li>
                        <li><CheckIcon className='schoolCard__icon' /> {t('aceCard_li4')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='schoolCard__gseImage' src="https://english-malta.com/wp-content/themes/customtheme/img/logo.png" alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('gseCard_title')}</h3>
                    <p className='school__country'>{t('gseCard_Mainlocation')}</p>
                    <p className='school__course'>{t('gseCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('gseCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('gseCard_li2')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('gseCard_li3')}</li>
                        <li><CheckIcon className='schoolCard__icon' /> {t('gseCard_li4')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhMRExIVFRUWGBcWGBUXGRcTExceGBIWFxYVGxMYHyggGB0mHRcVIT0hJi4rLi4uGR8zODMsNygvLisBCgoKDg0OGxAQGy0mICYvLy0yLTAvNy0rMi0tLy0tLS8tLS8tLS0tLy8tLS0tLS0vLS8tLS0tLS0tLS0tLS0tLf/AABEIALwBDAMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAQMHAv/EAEAQAAIBAgQCCAMFBQcFAQAAAAABAgMRBBIhMQVBBhMiUWFxgZEyobEjUmKS0RQzQnLBJDRTgqKy4UNEc7PwFf/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQFAQb/xAAzEQACAQIDBQcDBAIDAAAAAAAAAQIDEQQhMRJBUWFxBROBkaGx8DLB4SJCUtEV8RQjM//aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKrjPGqeHWvam9orfzfciFSpGnHak7InCEpyUYq7LKckldtJLm9EU+L6TYeGik5v8CuvzOyMs6uJxlTLe63yrs04Lvf/N2aXhvRijTs5rrJePwryj+tznxxVbEP/ojaP8pfZfPBm6WFo4f/AN5Nv+K+7+eJHh0mq1P3WFlLxu39Fb5kinxHGv8A7VfnUfqy9jFJWWiPo0RoVf3VX4KKXqn7lDr0v20l4uT+6Kanxaqv3mFqrxhap8kS8JxGlU0jJX5xfZmv8r1JxFxeDp1F24KVtn/EvFSWq9C1QqR0lfqvusvQrcqcv226P7O79SUCsSq0ucqtPuetaPr/ABr5+ZOoVYzipRacXqmticZ3yas+HzVfNSEoWzWa+eXzcdoAJkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAddSSSbbskrt+QBXce4sqFO+85aRj9W/BGGwmHqYmta95Sd5SfJc5P9PJHPGMe69WU3ttFd0Vt+vqXGBxcMHRTtmrVFmy/djbs3fJc7eJ87VqrFVrydqcc/nOW7fbQ+gpUXhaP6VepL55Lfuvqanh2AhRgoQWnN85Pm2+8mHmmM41XqO8qsku6Lyx9l/Uj0sbVi7xqTT8JP9TT/AJalH9MYOy6fn3M/+JqSzlNX+dD1MGN4L0nkmoV3eL0VTZr+a268TYo6WHxMK8dqH5OdXw86Etmf4ZyDNcb6TRpt06VpTWjk/gj4fiZl8TxevU+KrPyTyr2jZGWv2lSpPZWb5aeZpodnVaq2nkuevkemlViYulJ1YLsPWrFfOpFd65rmvFHn8cVNaqcl/mf6m46KYmdSg3OTk1Nq71drR0vz3ZGhj44mewk09b6kq+Blho7baa0a6lzTmmk07pq6a2d+Z2FTgJdXUnh38Nusp/yt2lD/ACv5NFsdCnPaXzX56GCcdl8t3T56lD1cZVa2avUhllFRSqZFbq4vbzuSv2qnRhBZqlTPJqLv1sm7N2v6WK+pWwqrV+v6vNmjbPHM7dXHw7yR1lGTw3U5ciqzSyq0U+oqN6etzFCSTdtm93vu/rtmjbUi2op32bJ6WWUL5Mkx4pB05zanHI8soNdvM7Wikt27q3mdFfiilTrwUZ06kKU5WksrXZdmmn63R0Yt2nVnZtQr0ZyS1dlSim7c7Xv6HXisZCrLESg7xWFks3J6yej52ueyrS0bW9dfqz9N2+55CjC+1bg+S+l29d5PWLhFtylNtU6Tcd49pyUcq3zN6ex1Y7iOajXSU6U4QbtLsyV08sk0/BnRicn2uZNx6mhfL8S7c+2v5d/Q6K1ZuliYRrddBUrqbs3Fu/Yc18WmpGdWSTV90uv7uOe7Ve1iUKMXJO2d49P2+G/R+Gdy3wvEoznkyzjdOUXKOVTStdr3W/eWRW43+8Yfyq/7Ylkbabeab0f2T+5iqKKs4q1192vsAAWFYAAAAAAAAAAAAAAAKPpbi8mHaW82oem8vkrepeGP6dVe1Rj4Sfu0v6MyY6bhh5NdPN2+5rwMFPERT6+WZlo2ur7cz7xFZzk5y3bv+i8lsdYPlb5WPqLZ3LbovgVVrpSV4xTm1ydmkk/V/Iv+muGi6KqWSlGSV/Bp6e9jOcE4t+zuclDM5JJXdkrNvu15DifG61dZZtKN75Yqy9W9WdCnXowwkqf7nfd5Z8jn1KFaeLjUWUY2/OXMrTQ//vyWEjTT+0u4X5qKSs799nb0ZQ0aEpu0Iyk+6KbfyOK1KUZOMlZrRrmjJSrTppuG9Wv+ePA11adOo1Ge53t+OB8mm6L8CjUj11VXV2ox2Ttu34X0t4GZPTOEQUaNFL7kfnFNmvsyhGrVbkrpLTcZO068qdJKLs29ToxPAcPNWdOMfGHYfy39TngXDnQhKm5KSzuSe2jStdd+haA76oU1PvEszguvUcNhyuueZTcfeTqa/wDh1En/ACz7Ml9C4KvpPG+GqrwT9pxZK4dO9KlLvhB+8URg7VpR4pP3T9kTkr0Iy4Nrwya92Scq7jmxBwdeUp1ovaEoqPk6cW/PVs+8Xj6dK3WTUb7J7+dlyLO8js7Tdlz5OxT3cr7KV3/eZzjaUpRtCeSV01LdaPZrmnsdGEws1OVSpKLlJKKUU1GMU721d222d1TiNKMVKVSKi1mTvo1pqu/de5z+30+r63PHJ96+m9ve+liL7tyvfTPX1t46kltqNksnlp6X8NCUfMYpaJEWnxKjKLmqkXGKTb7rtpX7tUzvdaKkoN9pptLm0rXfzRYpReaZBxayaO05INHidGcurjUi5a6J723s9n6HMuJ0VJwdSKktGr87pW89VoR72Fr7S80S7qd7bL46Mmgh1+I0YSUJ1Ixk+Tfftfu9SYSUk20noRcWkm1qAASPAAAAAAAAAAAAAYrp0vtKb/A/lL/k2plOnNDs0qnc3F+quv8AazD2lFvDS8H6m3s6VsTHxXoZAHB9Sg1a/NXXiv8A658ufTkzg2BVeqqbnlum72veyvb2v7GywvRrDw1cXN983deysjCUK0oSjOLtKLuma2h0whlWenJS/BZx+bTR1Oz6mGin3qV+LzOXj6eJbXdN24LL4jSUqUYq0YqK7kkl7I866QxaxNZP71/dJr6lxjOmE3pSgo/ik8z/ACrT6mdrTqVZSqSzTe8pWvZba22RPtHF0q0VCnnZ305Mh2dhatGTnPK6trz8jpPRuj2IU8PSfclF+cdP6HnJacD4zKg3pmhLeO2ven3mbAYlUKt5aNW/o04/DyrU7R1TuejAymK6YRy/Z05Zvx2UV7N3+RL6L8YdZShN/aR17syb7vDb2O7DG0Z1FTi7t+XTqcOWCrQpupKNkvPr0O7pZVy4aa+84x/1Jv5Jkzg393o/+OH+1Gd6a4rNKnQjq/ifm9Ir6+6NVhqOSEYfdio+ysRpS2sVO2iSXjmyVSOxhYJ6tt+GhCwM0quJu0u3D/0wOmrOTrSVNU1KMI56k29m5NJRXLd3uiVW4TQnJylSjKT3b3elhLhVF5b049hKMfBLZeK8GWd3UtZW1vrnm3yy1/1cr26d7u+iWnBLnnp/uxUcIin+yN2dliWnbT94kmly0Z2U0lON7KKxdT3dN5f9T97FzDCQjZqKWXNa3LO7yt5si4/DvI1CnCalLNUhLTOmtbN6KV8r9CvuHGn0t6JLruLViFKb4O+/i29fHzKzHuP9ty22o5rbX1v8rE/iFVKtFvVRo1pNLe3Y+tmccLwNuscqcYRnliqas0oxT+K2jbbZKw/DaNP4KcVuve11rvshClNq+Wbvv/lKWlt9+XHeeSqwTtm7K27fFR15W58NxVSdT+y5uqhBzhkpwvKSWR/xvuXcuZ8ycP2Wne2frIeefrln9fiLWlwqjHWNOKd00+aad1bu8iungZznaVGmm5pyrJrWMZqWkd1J5UiE6U4ri2mt74cuXBJcrZ2RrU5NbkmnuWl+fPPNt875fNNTbxWtFRzyz51Jyy5Fa9ntltYuOHq1Kmr5rQj2tVfsrWz1PjEcNozkpzpxk1zfO2yff6k4006TjJt+7438PUzVaqnFJe3K3j6cAAC8oAAAAAAAAAAAABX8bwXXUZ01va8fNar9PUsARnBTi4vRkoycZKS1R5KXPAalKp/Zqy0k705bSjJ7pPx9r+Z39LeF9XU66K7E3r+GXP0e/uZ8+UanhqrjJXt5Nf0/Q+pUo4mltRdr+af49TTYnofUT+zqRa/FeL+V0yPDoliHu4LxzP8Aoiy6P9JFJKlWdpbKb2fhJ8n48zUnXpYLCV47cL24X063ucmrjcXQlsTtfjbXpaxlsF0QitatRy/DHsr33+hoMPg6dOOSEIqPclv59/qSgb6OGpUfoVvfzeZgrYirW+uV/by0MvxLolGTcqUsn4XrH0e6+ZTz6LYlcovxUlb52PQAZ6nZuHm72t0NNPtKvBWvfr89zDYbojWk+3KEF+aXstPmX1HC0cHSlU3dtZP45PlFd3kWGOx0KMc9SVlyXN+CXNmC4xxSeJmtGop2hFa76esmZqyw+BV4K8918/Hl4al9J4jGu03aG+2Xhz8ckSuBUpYnFdbPWz6yXdp8Efe3ojfFT0e4Z1NJJ/HLtS87aR9P1LY2YGg6VL9X1PN/PfncyY2uqtX9P0rJfPmRVV8bU6x0qVNTlFJycpZYRvsr2bbe538PxmdSUo5JweWcb3s7XTT5pp3udXC328Qnv1t/R04ZX8n7EXjWIUrU4pybqQjUinlbTi5qGd2Wtlz28z3blFd43xy3b7br3yz135cI7EZSVNLg7+Tb4Wzy03Zl3dbi5mq1JxhiPsuqpuhN5c0JLMtmoxbtdN+xLWBp06tKMY6VKdRVOeeyhrLver18SSrSb+nhxWrtpb+g6EUr7XHSz0V9zt7lng8UqlONRaKWuvmSLmWwuDhKnhIuPZnKo5JaX+zlvb+Vex9vD55VV1DqKD6uDU4x6tRhGyjmaafO/iVxxE9lfpvpx/jfdF9OvInLDw2n+q2vD+TW+S4eXPI0rkuZ9GaxGHnLq51KKrfZRjKKknOMtbzitu13ruLnhs4ulTcXJxyqzl8T05+JfTquUnFq3v7fd232KalJQipJ39ve/or6q6JgALikAAAAAAAAAAAAAAAAAA6MTQjOLhJXjJWaMDxzgs6Er6ypvaXd4S7n9T0U66tNSTi0mno09U/QyYrBxxEc8mtH83GrC4ueHllmnqvm88pLXhnH61G0U88Puy1t5PdfQueK9E07you34JbekuXqZvGcPq0v3lOUfG14/mWhwJ0MRhZbWa5rT51R34VsPiY2yfJ6/OjNbhel1GXxxlB/nj7rX5E6PSDCv/qr2kv6HnQLodrVks7P5yKJdk0W8rr5zPQK/SXDR/jcvCMZP6qxU43pg9qVO34p6v8AKv1MtFXdlq+5astcB0cr1bdnJH709PaO7Pf+fiq/6aa8l93e3XLqef8AAwtD9VR+b+2RX4jEVKss05SnJ6Lm/JJfRGu6N8B6u1Wou3/DH7ni/wAX0LDhHAqVHVLNP7739F/CWxtwfZ2w+8q5y8/FvezFi+0Ntd3Syj5eFtyAAOscsr8Xw2M5KopzpztbNB2bXc000zhcLp9W6fa1edzu+szX+PP97RFiCvuYXbtqWd7OyV9CsjwtZailOcnUjklKTWbLrorKy3fIlTw8XOE9bwUku7tWvf2RJAVKK0XzX3PHUm9X809itw/Cowy2lNqDk4ptWWaOVx221ZxieFxk5SU6kMySmoNJTsra3WjtpdWLMHncU9nZtl8Xtl0yPe+qbW1fP8398+uZW1uFxbTjOdNqKh9m0rxWyd09rvXfUmYehGEYwirRikkvI7gSjTjF3SPJTlJWbAAJkAAAAAAAAAAAAAAAAAAAAAAcHIAIdXhtGXxUqb8XGN/c+FwfD/4FP8qf1J4IOnB6peRNVZrST8zooYaEPghGPkkvod4BNZEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('ecCard_title')}</h3>
                    <p className='school__country'>{t('ecCard_Mainlocation')}</p>
                    <p className='school__course'>{t('ecCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('ecCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('ecCard_li2')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('ecCard_li3')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('ecCard_li4')}</li>
                    </ul>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default SchoolCard